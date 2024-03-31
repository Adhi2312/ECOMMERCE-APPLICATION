from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns=[
    path("",views.index,name="index"),
    path('login', views.login, name="login"),
    path('Item_list', views.Item_list, name="Item_list"),
    path('Cart_list', views.Cart_list, name="Cart_list"),
    path('loginBack', views.loginBack, name="loginBack"),
    path('addCart/<str:pk>', views.addCart, name="addCart"),
    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
