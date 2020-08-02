from django.db.models import Q
from django_filters import rest_framework as django_filter
from .models import *

import logging
log = logging.getLogger(__name__)

class ArticleFilter(django_filter.FilterSet):

    searchText = django_filter.CharFilter(field_name='title', method='title_filter')
    categoryId = django_filter.NumberFilter(method='category_filter')

    class Meta:
        model = Article
        fields = []

    def title_filter(self, queryset, name, value):
        log.debug('=====TITLE_FILTER=====')

        q_list = []
        qs = list({i.strip() for i in value.split(',')})
        for q in qs:
            q_list.append('Q(title__contains=q)')
        query_str = '&'.join(q_list)

        q = Article.objects.filter(eval(query_str))

        log.debug('検索結果 : ')
        log.debug(q)
        return q

    def category_filter(self, queryset, name, value):
        log.info('=====CATEGORY_FILTER=====')
        return queryset.filter(category=value)