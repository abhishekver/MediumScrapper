from django.conf.urls import include, url
from Posts import api

urlpatterns = [
	url(r'^crawl_blogs/(?P<tag>.*)/$',
        api.CrawlerApi.as_view(),
        name='crawl_blogs'),
]