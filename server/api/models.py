from django.db import models
from django.utils import timezone

class Article(models.Model):
    title = models.CharField('タイトル', max_length=40)
    content = models.TextField('内容')

    def __str__(self):
        return self.title