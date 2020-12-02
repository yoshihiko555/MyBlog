from django.urls import path, include
from . import views, viewsets
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('article', viewsets.ArticleViewSet)
router.register('category', viewsets.CategoryViewSet)
router.register('comment', viewsets.CommentViewSet)
router.register('reply', viewsets.CommentReplyViewSet)

app_name = 'api'

urlpatterns = [
    path('contact/', views.SendContactView.as_view(), name='send_contact'),
    path('image/', views.ImageFileView.as_view(), name='images'),
    path('user/', views.UserView.as_view(), name='user'),
    path('', include(router.urls)),
]
