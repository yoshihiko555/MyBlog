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

from rest_framework import generics, permissions, authentication
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework import status, viewsets, filters
from rest_framework.parsers import FileUploadParser

from .serializers import *
from .models import *
from .filters import *

import re, logging

log = logging.getLogger(__name__)

class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_class = ArticleFilter


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.filter(is_public=False, deleted=False)
    serializer_class = CommentSerializer

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