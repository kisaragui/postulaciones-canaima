# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-09-02 15:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postulacion', '0002_remove_package_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='package_status',
            name='package_id',
        ),
        migrations.AddField(
            model_name='package',
            name='status',
            field=models.CharField(default='postulado', max_length=50, verbose_name='estatus del paquete'),
        ),
        migrations.DeleteModel(
            name='Package_status',
        ),
    ]
