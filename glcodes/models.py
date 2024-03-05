from django.db import models
from datetime import datetime

from publishers.models import Publisher


class Glcode(models.Model):
  publisher = models.ForeignKey(Publisher, on_delete=models.DO_NOTHING, blank=True, null=True)
  code = models.CharField(max_length=25)
  description = models.CharField(max_length=200)
  type = models.CharField(max_length=200)
  created_date = models.DateTimeField(default=datetime.now, blank=True)
  def __str__(self):
    return self.code
