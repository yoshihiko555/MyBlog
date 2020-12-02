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
            subject = serializer.data['title']
            context = {
                'name': serializer.data['name'],
                'email': serializer.data['email'],
                'content': serializer.data['content'],
            }
            message = render_to_string('mail/contact_receive.txt', context)
            from_email = ''
            # recipient_list = env.list('TO_EMAIL_LIST')
            recipient_list = ['md.takizawa@gmail.com', 'syutodayo@yahoo.co.jp']
            send_mail(subject, message, from_email, recipient_list)
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
