# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-11-17 15:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postulacion', '0006_auto_20161017_1445'),
    ]

    operations = [
        migrations.AlterField(
            model_name='package',
            name='description_package',
            field=models.CharField(max_length=200, unique=True, verbose_name='Descripcion del paquete'),
        ),
        migrations.AlterField(
            model_name='package',
            name='email',
            field=models.EmailField(max_length=50, unique=True, verbose_name='Correo del postulador'),
        ),
        migrations.AlterField(
            model_name='package',
            name='fecha',
            field=models.DateTimeField(auto_now_add=True, verbose_name='fecha de creacion del paquete'),
        ),
        migrations.AlterField(
            model_name='package',
            name='name_package',
            field=models.CharField(max_length=50, unique=True, verbose_name='Nombre del paquete'),
        ),
        migrations.AlterField(
            model_name='package',
            name='repository',
            field=models.URLField(max_length=150, unique=True, verbose_name='Direccion url del repositorio del paquete'),
        ),
        migrations.AlterField(
            model_name='package',
            name='status',
            field=models.CharField(default='postulado', max_length=50, verbose_name='Estatus del paquete'),
        ),
    ]
