from django.db import models
from datetime import datetime

class Publisher(models.Model):
  name = models.CharField(max_length=200)
  company_id = models.IntegerField(max_length=10, blank=True, unique=True)
  created_date = models.DateTimeField(default=datetime.now, blank=True)
  def __str__(self):
    return self.name
