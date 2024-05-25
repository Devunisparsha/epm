from django.db import models


# Create your models here.
class AboutUs(models.Model):
    image = models.FileField(upload_to="aboutus")
    description = models.TextField(max_length=10000)
