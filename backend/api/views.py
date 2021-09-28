from django.shortcuts import render
from .serializer import *
from .models import Category, Post
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import permissions
from .permissions import IsOwnerOrReadOnly
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import filters
from rest_framework.views import APIView
from .storage import up_image_to_cloud
from rest_framework.exceptions import APIException


# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'body', 'owner__username']
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        print(serializer.data)
        image_url = serializer.data['image']
        id_post = serializer.data['id']
        post = Post.objects.get(id=id_post)
        if image_url is not None:
            url = up_image_to_cloud(image_url)
            post.image_url = url
            post.image = None
            post.save()
        serializer = PostSerializer(post)
        exception = APIException(serializer.data)
        exception.status_code = status.HTTP_201_CREATED
        raise exception


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def get_post(self, slug):
        try:
            h = Post.objects.get(slug=slug)
            h.hit += 1
            h.save()
        except ObjectDoesNotExist:
            raise Http404()
        return h

    def get(self, request, slug):
        post = self.get_post(slug)
        return self.retrieve(request, slug)


    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)
        id_post = serializer.data['id']
        post = Post.objects.get(id=id_post)
        image_url = serializer.data['image']
        if image_url is not None:
            url = up_image_to_cloud(image_url)
            post.image_url = url
            post.image = None
            post.save()
        serializer = PostSerializer(post)
        exception = APIException(serializer.data)
        exception.status_code = status.HTTP_200_OK
        raise exception



class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]


class PostCategoryList(APIView):
    def get_category(self, slug):
        try:
            category = Category.objects.get(slug=slug)
        except ObjectDoesNotExist:
            raise Http404()
        return category

    def get(self, request, slug):
        category = self.get_category(slug)
        queryset = Post.objects.filter(categories=category.id)
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)




class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer