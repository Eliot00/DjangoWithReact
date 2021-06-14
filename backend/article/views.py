from rest_framework import viewsets
from article.serializers import ArticleSerializer
from article.models import Article
from article.permissions import IsAdminOrReadOnly


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAdminOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
