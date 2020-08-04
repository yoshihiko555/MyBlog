from rest_framework import serializers
from .models import *

import logging, datetime, markdown

log = logging.getLogger(__name__)

class ArticleSerializer(serializers.ModelSerializer):

    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    comment = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()
    content = serializers.CharField(write_only=True)
    conversion_content = serializers.SerializerMethodField()
    lead_text = serializers.CharField(max_length=60)
    next = serializers.SerializerMethodField()
    previous = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'content',
            'conversion_content',
            'lead_text',
            'category',
            'category_name',
            'thumbnail',
            'created_at',
            'updated_at',
            'comment',
            'next',
            'previous',
        ]

    def get_created_at(self, obj):
        return obj.created_at.strftime('%b %d %Y')

    def get_updated_at(self, obj):
        return obj.updated_at.strftime('%b %d %Y')

    def get_comment(self, obj):
        return CommentSerializer(obj.comment_set.filter(is_public=True), many=True).data

    def get_category_name(self, obj):
        return obj.category.name

    def get_conversion_content(self, obj):
        md = markdown.Markdown(
                extensions=[
                    'extra',
                    'nl2br',
                    'fenced_code',
                    'admonition',
                    'sane_lists',
                    'toc',
                ]
            )
        return md.convert(obj.content)

    def get_next(self, obj):
        try:
            return ArticleSubSerializer(obj.get_next_by_created_at()).data
        except:
            return None

    def get_previous(self, obj):
        try:
            return ArticleSubSerializer(obj.get_previous_by_created_at()).data
        except:
            return None


class ArticleSubSerializer(serializers.ModelSerializer):

    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'lead_text',
            'category',
            'category_name',
            'thumbnail',
            'created_at',
            'updated_at',
        ]

    def get_created_at(self, obj):
        return obj.created_at.strftime('%b %d %Y')

    def get_updated_at(self, obj):
        return obj.updated_at.strftime('%b %d %Y')

    def get_category_name(self, obj):
        return obj.category.name


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    
    created_at = serializers.SerializerMethodField()
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


class SingleUploadFileSerializer(serializers.ModelSerializer):

    file = serializers.ImageField()

    class Meta:
        model = UploadFile
        fields = ['__all__']