from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Post
from rest_framework.validators import UniqueValidator
import django.contrib.auth.password_validation as validators
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics, status
from django.core import exceptions
import django.contrib.auth.password_validation as validators



class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    slug = serializers.SlugField(
        required=True,
        validators=[UniqueValidator(queryset=Category.objects.all())]
    )

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'owner', 'posts']


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    slug = serializers.SlugField(
        required=True,
        validators=[UniqueValidator(queryset=Post.objects.all())]
    )

    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'body', 'owner', 'status', 'categories', 'image', 'image_url', "created", "hit"]



class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'posts', 'categories']


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'password2', 'email', 'first_name', 'last_name']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"error": "Password fields didn't match"})
        errors = dict()
        try:
            # validate the password and catch the exception
            validators.validate_password(password=attrs['password'])
            # the exception raised here is different than serializers.ValidationError
        except exceptions.ValidationError as e:
            errors['error'] = list(e.messages)

        if errors:
            raise serializers.ValidationError(errors)
        return attrs


    def create(self, validated_data):
        if User.objects.filter(username=validated_data["username"]).exists():
            raise serializers.ValidationError({"error": "username exits"})
        if User.objects.filter(email=validated_data["email"]).exists():
            raise serializers.ValidationError({"error": "email exists"})
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        # The default result (access/refresh tokens)
        data = super(MyTokenObtainPairSerializer, self).validate(attrs)
        # Custom data you want to include
        data.update({'id': self.user.id})
        data.update({'user': self.user.username})
        data.update({'email': self.user.email})
        data.update({'first_name': self.user.first_name})
        data.update({'last_name': self.user.last_name})

        # and everything else you want to send in the response
        return data

class CustomJWTSerializer(MyTokenObtainPairSerializer):
    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }
        # This is answering the original question, but do whatever you need here.
        # For example in my case I had to check a different model that stores more user info
        # But in the end, you should obtain the username to continue.
        user_obj = User.objects.filter(email=attrs.get("username")).first() or User.objects.filter(username=attrs.get("username")).first()
        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)