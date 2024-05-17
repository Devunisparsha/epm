from django.urls import path, include
from rest_framework import routers
from . import views

# routers = routers.DefaultRouter()
# routers.register(r"login", views.LoginView, basename="login")
#
# urlpatterns = [
#     path("", include(routers.urls)),
# ]

urlpatterns = [
    path("login/", views.login, name="login"),
]
