from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from jose import jwt


class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        header = request.META.get('HTTP_AUTHORIZATION')
        try:
            token = header.split()[1]
            user = self.get_user(token)
            return user, None
        except Exception:
            raise AuthenticationFailed('Authentication Failed')

    def get_user(self, token):
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.ALGORITHM])
        username = payload.get("sub")
        user = User.objects.get(username=username)
        return user
