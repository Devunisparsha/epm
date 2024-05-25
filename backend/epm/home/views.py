from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from home.models import Carousel, Prayer, WorshipPlaces, Magazine
from home.serializer import (
    CarouselSerializer,
    PrayerSerializer,
    MagazineSerializer,
    WorshipPlacesSerializer,
)


# Create your views here.
class CarouselView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer


class PrayersView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Prayer.objects.all()
    serializer_class = PrayerSerializer


class WorshipPlacesView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = WorshipPlaces.objects.all()
    serializer_class = WorshipPlacesSerializer


class MagazineView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer
