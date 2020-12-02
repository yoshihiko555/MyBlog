from django.http import Http404
from django.views import generic
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie
from django.template.loader import render_to_string
from django.template.context_processors import request
from django.db import transaction
from django.db.models import Q
from django.conf import settings
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.core.serializers import serialize
from django.shortcuts import get_object_or_404

from rest_framework import generics, permissions, authentication, status, viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework.parsers import FileUploadParser

from .serializers import *
from .models import *
from .filters import *
from .paginations import *
from .permissions import IsAdminOrReadOnly
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
import re, logging

log = logging.getLogger(__name__)

class ArticleViewSet(viewsets.ModelViewSet):
    pagination_class = DefaultResultPagination
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_class = ArticleFilter

    def get_queryset(self):
        # 管理者以外は公開フラグ:Trueの記事を返却
        if self.request.user.is_superuser:
            return Article.objects.all()
        else:
            return Article.objects.filter(is_public=True)

    def retrieve(self, request, pk=None):
        lookup_field = 'title'
        instance = get_object_or_404(self.get_queryset(), title=pk)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=['GET'], detail=False)
    def recent_articles(self, request, *args, **kwargs):
        # 最新記事を6件取得
        queryset = self.get_queryset().order_by('-created_at')[0:6]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAdminOrReadOnly,)
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CommentViewSet(viewsets.ModelViewSet):
    # TODO : コメント系は誰でも投稿可能にするためアクセス権限は不要？
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Comment.objects.all()
        else:
            return Comment.objects.filter(is_public=True, deleted=False)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    @action(methods=['PUT'], detail=True)
    def approval(self, request, pk=None):
        comment = Comment.objects.get(id=pk)
        comment.is_public = True
        comment.save()
        return Response(status=status.HTTP_200_OK)


    @action(methods=['PUT'], detail=True)
    def delete(self, request, pk=None):
        comment = Comment.objects.get(id=pk)
        comment.deleted = True
        comment.save()
        return Response(status=status.HTTP_200_OK)


class CommentReplyViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = CommentReply.objects.all()
    serializer_class = CommentReplySerializer

# class SampleViewSet(viewsets.)