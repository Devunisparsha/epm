from django.db import models
from gdstorage.storage import GoogleDriveStorage


gd_storage = GoogleDriveStorage()


# Create your models here.


class Carousel(models.Model):
    image = models.ImageField(storage=gd_storage, upload_to="Carousel")
