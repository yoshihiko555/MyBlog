from django.db import models
from django.utils import timezone
import os, uuid, logging

log = logging.getLogger(__name__)

def article_thumbnail(instance, filename):
    return 'thumbnail/{0}/{1}/'.format(instance.title, filename)

def upload_image(instance, filename):
    return 'images/{0}/'.format(filename)

class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    title = models.CharField('タイトル', max_length=255, unique=True)
    content = models.TextField('内容')
    lead_text = models.TextField('紹介文', max_length=60)
    category = models.ForeignKey('api.Category', on_delete=models.PROTECT)
    thumbnail = models.ImageField(
        'サムネイル',
        upload_to=article_thumbnail,
        default='default/default-thumbnail.jpg',
        blank=True,
        null=True
    )
    created_at = models.DateTimeField('作成日時', default=timezone.now)
    updated_at = models.DateTimeField('更新日時', auto_now=True)
    is_public = models.BooleanField('公開フラグ', default=False)
    related_articles = models.ManyToManyField('self', blank=True)

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
    content = models.TextField('内容')
    deleted = models.BooleanField('削除フラグ', default=False)
    is_public = models.BooleanField('公開フラグ', default=False)
    created_at = models.DateTimeField('作成日時', default=timezone.now)

    def __str__(self):
        return self.name


class UploadFile(models.Model):
    file = models.ImageField(
        '画像ファイル',
        upload_to=upload_image
    )

    def __str__(self):
        return self.file.url