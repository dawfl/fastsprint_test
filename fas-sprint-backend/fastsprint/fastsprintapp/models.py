from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Sprint(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    sprint_name = models.CharField(max_length=200, null=True, blank=True)
    sprint_aim = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    activate = models.BooleanField(default=False)
    preactivate = models.BooleanField(default=False)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.sprint_name

class Task(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    title_name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    sprint = models.ForeignKey(Sprint,related_name='tasks', on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title_name


