from django.contrib import admin
from .models import *

admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(CommentReply)
admin.site.register(UploadFile)