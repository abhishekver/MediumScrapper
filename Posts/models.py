from django.db import models

class Blog(models.Model):
	title = models.CharField(max_length=120)
	creator = models.CharField(max_length=120)
	details = models.TextField()

	def __str__(self):
		return self.title
