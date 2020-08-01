from django.db import models
from django.utils import timezone
import os, uuid, logging

log = logging.getLogger(__name__)

def article_file_name(instance, filename):
    return 'upload/{0}/{1}/'.format(instance.title, filename)

class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    title = models.CharField('タイトル', max_length=255)
    content = models.TextField('内容')
    category = models.ForeignKey('api.Category', on_delete=models.PROTECT)
    thumbnail = models.ImageField('サムネイル', upload_to=article_file_name, blank=True, null=True)
    created_at = models.DateTimeField('作成日時', default=timezone.now)
    updated_at = models.DateTimeField('更新日時', auto_now=True)
    is_public = models.BooleanField('公開フラグ', default=False)
    related_articles = models.ManyToManyField('self', blank=True, null=True)

    class Meta:
        # 新しいデータから表示
        ordering = ('-created_at',)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField('カテゴリ名', max_length=100)
    created_at = models.DateTimeField('作成日時', default=timezone.now)

    def __str__(self):
        return self.name


class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    name = models.CharField('名前', max_length=100)
    title = models.CharField('タイトル', max_length=255)
    content = models.TextField('内容')
    readed = models.BooleanField('既読', default=False)
    is_public = models.BooleanField('公開フラグ', default=False)

    def __str__(self):
        return self.title