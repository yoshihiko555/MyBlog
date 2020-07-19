from rest_framework import serializers
from .models import *

import logging, datetime

log = logging.getLogger(__name__)

class ArticleSerializer(serializers.ModelSerializer):

    created_at = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'content',
            'category',
            'thumbnail',
            'created_at',
            'updated_at',
        ]

    def get_created_at(self, obj):
        return obj.created_at.strftime('%b %d %Y')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'