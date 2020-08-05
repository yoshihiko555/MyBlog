from django.shortcuts import render
from django.core.mail import send_mail
from django.template.loader import render_to_string

from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import *

import logging, environ

log = logging.getLogger(__name__)
env = environ.Env()
env.read_env('.env')

class SingleUploadFileView(generics.CreateAPIView):
    serializer_class = SingleUploadFileSerializer


class SendContactView(APIView):
    permission_classes = (permissions.AllowAny,)
    # serializer_class = ContactSerializer

    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            subject = serializer.data['title']
            context = {
                'name': serializer.data['name'],
                'email': serializer.data['email'],
                'content': serializer.data['content'],
            }
            message = render_to_string('mail/contact_receive.txt', context)
            from_email = ''
            recipient_list = env.list('TO_EMAIL_LIST')
            send_mail(subject, message, from_email, recipient_list)
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
