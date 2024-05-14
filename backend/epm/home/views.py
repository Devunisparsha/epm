from django.shortcuts import render
from rest_framework import viewsets

from home.models import Carousel
from home.serializer import CarouselSerializer


# Create your views here.
class CarouselView(viewsets.ModelViewSet):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer
