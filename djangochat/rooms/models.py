from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=1000)
    slug = models.SlugField(unique=True)
