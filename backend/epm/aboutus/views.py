from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from .models import AboutUs
from .serializer import AboutUsSerializer


# Create your views here.

class AboutUsView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer
