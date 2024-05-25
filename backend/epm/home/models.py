from django.db import models
from gdstorage.storage import GoogleDriveStorage


gd_storage = GoogleDriveStorage()


# Create your models here.


class Carousel(models.Model):
    image = models.FileField(upload_to="home/carousel/")


class WorshipPlaces(models.Model):
    name = models.CharField(max_length=40)
    image = models.ImageField(upload_to="home/worshipPlace/", blank=True)


class Prayer(models.Model):
    day = models.TextField(max_length=15)
    time = models.TextField(max_length=20)
    description = models.TextField(blank=True)
    place = models.ForeignKey(
        WorshipPlaces, on_delete=models.CASCADE, null=True, blank=True
    )


class Magazine(models.Model):
    name = models.CharField(max_length=50)
    month = models.TextField(max_length=100)
    image = models.ImageField(upload_to="home/magazine/")
    download_url = models.FileField(upload_to="magazines", storage=gd_storage)
