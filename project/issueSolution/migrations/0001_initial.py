# Generated by Django 2.0.6 on 2018-07-23 15:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('project', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000)),
                ('description', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
                ('status', models.CharField(choices=[('1', 'Open'), ('0', 'Closed')], max_length=1)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='project.ProjectDetail')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='IssueComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
                ('issue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='issueSolution.Issue')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Solution',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000)),
                ('description', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
                ('status', models.CharField(choices=[('0', 'Open'), ('1', 'Accepted'), ('2', 'Not Accepted')], max_length=1)),
                ('issue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='issueSolution.Issue')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_solution', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SolutionComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
                ('solution', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='issueSolution.Solution')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
