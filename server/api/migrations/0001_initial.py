# Generated by Django 3.0.3 on 2020-08-01 14:53

import api.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255, verbose_name='タイトル')),
                ('content', models.TextField(verbose_name='内容')),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=api.models.article_file_name, verbose_name='サムネイル')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='作成日時')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新日時')),
                ('is_public', models.BooleanField(default=False, verbose_name='公開フラグ')),
            ],
            options={
                'ordering': ('-created_at',),
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='カテゴリ名')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='作成日時')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100, verbose_name='名前')),
                ('title', models.CharField(max_length=255, verbose_name='タイトル')),
                ('content', models.TextField(verbose_name='内容')),
                ('readed', models.BooleanField(default=False, verbose_name='既読')),
                ('is_public', models.BooleanField(default=False, verbose_name='公開フラグ')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Article')),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.Category'),
        ),
        migrations.AddField(
            model_name='article',
            name='related_articles',
            field=models.ManyToManyField(blank=True, null=True, related_name='_article_related_articles_+', to='api.Article'),
        ),
    ]
