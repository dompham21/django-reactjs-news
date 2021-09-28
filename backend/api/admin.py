from django.contrib import admin
from .models import *
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


class PostAdmin(SummernoteModelAdmin):
    list_display = ('title', 'status', 'created', 'hit', 'owner')
    list_filter = ("status",)
    search_fields = ['title', 'body']
    prepopulated_fields = {'slug': ('title',)}
    summernote_fields = ('body',)

admin.site.register(Post, PostAdmin)
admin.site.register(Category)