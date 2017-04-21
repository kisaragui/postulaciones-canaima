# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-10-03 18:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statusSeguimiento', '0011_auto_20161003_1706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historial',
            name='status',
            field=models.CharField(choices=[('p', 'postulado'), ('e', 'evaluado'), ('a', 'aceptado'), ('r', 'rechazado')], default='p', max_length=10),
        ),
    ]
