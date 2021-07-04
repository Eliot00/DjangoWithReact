from datetime import datetime, timedelta

from django.conf import settings
from jose import jwt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate


@api_view(['POST'])
def login(request):
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        data = {"sub": user.username, "exp": datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)}
        token = jwt.encode(data, settings.JWT_SECRET_KEY, algorithm=settings.ALGORITHM)
        return Response(data={"access_token": token}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_401_UNAUTHORIZED)
