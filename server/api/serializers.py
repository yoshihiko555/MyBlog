from rest_framework import serializers
from .models import *

class ArticleSerializer(serializers.ModelSerializer):

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


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'