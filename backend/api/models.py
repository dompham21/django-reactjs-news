from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

STATUS = (
    (0, 'Private'),
    (1, 'Public')
)


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=155)
    owner = models.ForeignKey('auth.User', related_name='categories', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'


class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=True, default='')
    owner = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)
    categories = models.ManyToManyField('Category', related_name='posts', blank=True)
    hit = models.IntegerField(default=0)
    status = models.IntegerField(choices=STATUS, default=0)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    image_url = models.CharField(max_length=255, blank=True, default="")

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title