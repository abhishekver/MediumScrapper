from django.db import models

class Blog(models.Model):
	title = models.CharField(max_length=120)
	creator = models.CharField(max_length=120)
	details = models.TextField(blank=True, null=True)
	tags = models.TextField(blank=True, null=True) #using comma separated values for tags storage as sqlite doesn't support array fields

	def __str__(self):
		return self.title
