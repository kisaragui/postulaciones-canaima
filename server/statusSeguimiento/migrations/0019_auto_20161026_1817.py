# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-10-26 18:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statusSeguimiento', '0018_auto_20161025_2052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historial',
            name='status',
            field=models.CharField(choices=[('postulado', 'postulado'), ('evaluado', 'evaluado'), ('aceptado', 'aceptado'), ('rechazado', 'rechazado')], default='evaluado', max_length=10),
        ),
    ]