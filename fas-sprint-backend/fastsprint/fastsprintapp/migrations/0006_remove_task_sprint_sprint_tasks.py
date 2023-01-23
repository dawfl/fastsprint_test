# Generated by Django 4.1.4 on 2022-12-21 12:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fastsprintapp', '0005_remove_sprint_status_sprint_activate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='sprint',
        ),
        migrations.AddField(
            model_name='sprint',
            name='tasks',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='fastsprintapp.task'),
        ),
    ]
