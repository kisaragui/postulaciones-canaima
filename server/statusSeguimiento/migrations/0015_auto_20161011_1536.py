# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-10-11 15:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statusSeguimiento', '0014_auto_20161011_1527'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historial',
            name='name_package',
            field=models.CharField(max_length=50, verbose_name='nombre paquete'),
        ),
    ]