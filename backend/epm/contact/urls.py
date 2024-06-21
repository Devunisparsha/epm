from rest_framework import routers
from django.urls import path, include
from . import views


urlpatterns = [
    path("prayerrequest/", views.prayerRequestView, name="prayerrequest"),
]
