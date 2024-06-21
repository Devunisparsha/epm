from rest_framework import serializers
from .models import PrayerRequest


class PrayerRequetSerializer(serializers.Serializer):
    class Meta:
        model = PrayerRequest
        fields = "__all__"
