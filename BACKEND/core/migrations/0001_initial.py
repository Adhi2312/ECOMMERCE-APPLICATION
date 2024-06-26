# Generated by Django 4.2.2 on 2023-10-15 08:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Item_name', models.CharField(max_length=20)),
                ('Item_description', models.TextField(max_length=255)),
                ('Item_type', models.CharField(max_length=30)),
                ('Item_Quantity', models.IntegerField(default=0)),
                ('Item_price', models.IntegerField(default=0)),
                ('Created_at', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
    ]
