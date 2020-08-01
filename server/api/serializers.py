from rest_framework import serializers
from .models import *

import logging, datetime

log = logging.getLogger(__name__)

class ArticleSerializer(serializers.ModelSerializer):

    created_at = serializers.SerializerMethodField()
    comment = serializers.SerializerMethodField()

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
            'comment',
        ]

    def get_created_at(self, obj):
        return obj.created_at.strftime('%b %d %Y')

    def get_comment(self, obj):
        return CommentSerializer(obj.comment_set.all(), many=True).data


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'

    def create(self, validated_data):
        comment = Comment.objects.create(
            name=validated_data['name'],
            title=validated_data['title'],
            content=validated_data['content'],
            article=validated_data['article'],
        )
        return comment
