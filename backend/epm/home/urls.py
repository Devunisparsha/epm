from django.urls import path, include
from rest_framework import routers

from home import views

router = routers.DefaultRouter()
router.register(r"carousel", views.CarouselView, basename="carousel view")
router.register(r"prayers", views.PrayersView, basename="PlacesView")
router.register(r"worshipplaces", views.WorshipPlacesView, basename="WorshipPlacesView")
router.register(r"magazines", views.MagazineView, basename="MagazineView")

urlpatterns = [path("", include(router.urls))]
