from django.shortcuts import render
from rest_framework import generics

from .serializers import *

class SingleUploadFileView(generics.CreateAPIView):
    serializer_class = SingleUploadFileSerializer