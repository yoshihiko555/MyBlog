from django.shortcuts import render
from django.core.mail import send_mail
from django.template.loader import render_to_string

from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

from .models import *
from .serializers import *
from .permissions import IsAdminOrReadOnly
import logging, environ

log = logging.getLogger(__name__)
# env = environ.Env()
# env.read_env('.env')

class ImageFileView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = UploadFile.objects.all()
    serializer_class = SingleUploadFileSerializer


class SendContactView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            context = {
                'name': serializer.data['name'],
                'email': serializer.data['email'],
                'title': serializer.data['title'],
                'content': serializer.data['content'],
            }
            from_email = ''
            recipient_list = ['yoshihiko05410@gmail.com']
            receive = self.getReceiveObject(context)
            response = self.getResponseObject(context)
            send_mail(receive['subject'], receive['text'], from_email, recipient_list, html_message=receive['html'])
            send_mail(response['subject'], response['text'], from_email, [serializer.data['email']], html_message=response['html'])
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def getReceiveObject(self, context):
      return {
        'subject': 'サイトからお問い合わせがあります。',
        'text': render_to_string('mail/txt/contact_receive.txt', context),
        'html': render_to_string('mail/html/contact_receive.html', context)
      }

    def getResponseObject(self, context):
      return {
        'subject': '【yoshihiko】お問い合わせ完了',
        'text': render_to_string('mail/txt/contact_response.txt', context),
        'html': render_to_string('mail/html/contact_response.html', context)
      }

class UserView(APIView):
    # permission_classes = (permissions.AllowAny,)
    permission_classes = (IsAdminOrReadOnly,)
    # authentication_classes = [SessionAuthentication]
    def get(self, request, format=None):
        log.info(request.user.username)
        data = {
            'username': request.user.username
        }
        # content = {
        #     'user': unicode(request.user),  # `django.contrib.auth.User` instance.
        #     'auth': unicode(request.auth),  # None
        # }
        # return Response(content)
        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        log.info('CSRFの確認')
        log.info(request.data)
        return Response(None)
