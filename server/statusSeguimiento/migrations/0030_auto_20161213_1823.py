# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-12-13 18:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statusSeguimiento', '0029_auto_20161207_1450'),
    ]

    operations = [
        migrations.AddField(
            model_name='obsevaluador',
            name='name',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='preevaluador',
            name='name',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
