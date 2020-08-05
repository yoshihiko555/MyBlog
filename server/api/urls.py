from django.urls import path, include
from . import views, viewsets
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('article', viewsets.ArticleViewSet)
router.register('category', viewsets.CategoryViewSet)
router.register('comment', viewsets.CommentViewSet)

app_name = 'api'

urlpatterns = [
    path('upload/', views.SingleUploadFileView.as_view(), name='upload_file'),
    path('contact/', views.SendContactView.as_view(), name='send_contact'),
    path('', include(router.urls)),
]
