# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-11-29 19:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statusSeguimiento', '0024_auto_20161129_1650'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='evaluador1',
            name='pregunta',
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre1',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre2',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre3',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre4',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre5',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre6',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre7',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre8',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='evaluador1',
            name='pre9',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
