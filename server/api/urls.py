from django.urls import path, include
from . import views, viewsets
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('article', viewsets.ArticleViewSet)
router.register('category', viewsets.CategoryViewSet)
router.register('comment', viewsets.CommentViewSet)

app_name = 'api'

urlpatterns = [
    path('', include(router.urls)),
]
