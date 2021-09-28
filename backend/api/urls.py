from django.urls import path, include
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .serializer import CustomJWTSerializer

urlpatterns = [
    path('posts/', PostList.as_view()),
    path('posts/<str:slug>', PostDetail.as_view()),
    path('categories/', CategoryList.as_view()),
    path('categories/<int:pk>', CategoryDetail.as_view()),
    path('category/<str:slug>', PostCategoryList.as_view()),
    path('user/', UserList.as_view()),
    path('user/<str:username>', UserDetail.as_view()),
    path('register/', RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(serializer_class=CustomJWTSerializer), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]