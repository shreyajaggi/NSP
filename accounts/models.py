from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class project_details(models.Model):
    project_name = models.CharField(max_length=50, default="", blank=False)
    mentor_name = models.CharField(max_length=50, default="", blank=False)
    branch = models.CharField(max_length=50, blank=True)
    description = models.CharField(max_length=2400)
    paid = models.BooleanField(default=False)
    duration = models.IntegerField(default=6, blank=True)

    def __str__(self):
        return self.project_name + " under " + self.mentor_name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    year_of_study = models.CharField(max_length=3, default="", blank=True)
    stream = models.CharField(max_length=50, default="", blank=True)
    phone = models.IntegerField(default=0, blank=True)
    image = models.ImageField(upload_to='profile_image', blank=True)

    def __str__(self):
        return self.user.username


def create_profile(sender, **kwargs):
    if kwargs['created']:
        user_profile = UserProfile.objects.create(user=kwargs['instance'])


post_save.connect(create_profile, sender=User)


