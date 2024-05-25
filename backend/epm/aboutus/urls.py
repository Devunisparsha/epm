from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.DefaultRouter()
router.register(r"aboutus", views.AboutUsView, basename="About us view")
urlpatterns = [
    path("", include(router.urls)),
]
