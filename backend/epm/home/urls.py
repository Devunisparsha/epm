from django.urls import path, include
from rest_framework import routers

from home import views

router = routers.DefaultRouter()
router.register(r"carousel", views.CarouselView, basename="carousel view")


urlpatterns = [
    path("", include(router.urls)),
]
