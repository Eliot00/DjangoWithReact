from django.urls import path
from article import views


urlpatterns = [
    path('article_list', views.article_list),
]