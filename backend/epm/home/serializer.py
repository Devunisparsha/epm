from rest_framework import serializers

from home.models import Carousel, Prayer, WorshipPlaces, Magazine


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = "__all__"


class PrayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prayer
        fields = "__all__"


class WorshipPlacesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorshipPlaces
        fields = "__all__"


class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = "__all__"
