import uuid
from django.db import models

# Create your models here.

class SleepDiary(models.Model):
    #table name
    class Meta:
        db_table = "SleepDiary"
    #id
    id = models.UUIDField(verbose_name="ID", primary_key=True, default=uuid.uuid4, editable=False)
    #title
    title = models.CharField(verbose_name="Title", max_length=50)
    #start event date
    start = models.CharField(verbose_name="start event date", max_length=50)
    #end event date
    end = models.CharField(verbose_name="end event date", max_length=50)