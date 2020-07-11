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

import logging
import re

logger = logging.getLogger(__name__)

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer