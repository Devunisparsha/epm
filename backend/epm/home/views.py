from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from home.models import Carousel
from home.serializer import CarouselSerializer


# Create your views here.
class CarouselView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer
