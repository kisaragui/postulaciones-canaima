# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-11-23 19:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postulacion', '0007_auto_20161117_1517'),
    ]

    operations = [
        migrations.AlterField(
            model_name='package',
            name='status',
            field=models.CharField(default='Postulado', max_length=50, verbose_name='Estatus del paquete'),
        ),
    ]
