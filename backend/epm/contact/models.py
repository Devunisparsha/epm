from django.db import models

# Create your models here.
class PrayerRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    prayer=models.TextField(max_length=4000)
    created_at = models.DateTimeField(auto_now_add=True)
    