import json
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from .models import PrayerRequest
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.db import transaction


# Create your views here.
@csrf_exempt
@transaction.atomic
def prayerRequestView(request):
    if request.method == "POST":
        data = request.body
        data = json.loads(data.decode("utf"))
        name = data.get("name")
        email = data.get("email")
        prayer = data.get("prayer")
        prayerRequest = PrayerRequest(name=name, email=email, prayer=prayer)
        prayerRequest.save()
        send_mail(
            "Prayer Request",
            f"Name: {name}\nEmail: {email}\nPrayer: {prayer}",
            settings.EMAIL_HOST_USER,
            ["2010040119ece@gmail.com"],
        )
        return HttpResponse("success post", 200)
    return HttpResponse("invalid request", 404)
