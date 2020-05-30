from django.contrib import admin

from Posts.models import Blog

class BlogAdmin(admin.ModelAdmin):
	list_display = ('title', 'creator', 'details')

admin.site.register(Blog, BlogAdmin)
