from django.shortcuts import render
from article.models import Article


def article_list(request):
    articles = Article.objects.all()
    context = {'articles': articles}

    return render(request, 'article/article_list.html', context)
