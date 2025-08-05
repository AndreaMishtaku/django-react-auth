from django.urls import path
from rest_framework_simplejwt.views import TokenBlacklistView, TokenObtainPairView, TokenRefreshView
from authentication.views import RegisterView, UserView

urlpatterns=[
    path("register", RegisterView.as_view(), name="register"),
    path("login",TokenObtainPairView.as_view(), name="login"),
    path("refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("user", UserView.as_view(), name="user"),
    path("logout", TokenBlacklistView.as_view(), name="logout"),
]