# Generated by Django 5.0.1 on 2024-02-29 20:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('glcodes', '0002_alter_glcode_created_date_alter_glcode_publisher'),
        ('publishers', '0003_alter_publisher_company_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glcode',
            name='publisher',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='publishers.publisher'),
        ),
    ]
