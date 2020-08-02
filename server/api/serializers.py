from rest_framework import serializers
from .models import *

import logging, datetime

log = logging.getLogger(__name__)

class ArticleSerializer(serializers.ModelSerializer):

    created_at = serializers.SerializerMethodField()
    comment = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'content',
            'category',
            'category_name',
            'thumbnail',
            'created_at',
            'updated_at',
            'comment',
        ]

    def get_created_at(self, obj):
        return obj.created_at.strftime('%b %d %Y')

    def get_comment(self, obj):
        return CommentSerializer(obj.comment_set.filter(is_public=True), many=True).data

    def get_category_name(self, obj):
        return obj.category.name


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    article_title = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            'id',
            'article',
            'name',
            'content',
            'is_public',
            'created_at',
            'article_title',
        ]

    def get_article_title(self, obj):
        return obj.article.title

    def create(self, validated_data):
        comment = Comment.objects.create(
            name=validated_data['name'],
            content=validated_data['content'],
            article=validated_data['article'],
        )
        return comment
