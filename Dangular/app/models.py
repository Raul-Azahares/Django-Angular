from __future__ import unicode_literals

from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=225)
    body = models.TextField()
