from django.contrib.auth import authenticate, login as login_required
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
import json


# Create your views here.
@csrf_exempt
def login(request):
    if request.method == "POST":
        data = request.body
        data = json.loads(data.decode("utf"))
        username = data.get("user")
        password = data.get("password")

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                csrf = get_token(request)
                token = user.auth_token.pk
                is_super_user = user.is_superuser
                return JsonResponse(
                    {
                        "csrf": csrf,
                        "token": token,
                        "user": username,
                        "is_super_user": is_super_user,
                    }
                )
            return HttpResponse("User is not active")
        return HttpResponse("Invalid username or password", status=400)
