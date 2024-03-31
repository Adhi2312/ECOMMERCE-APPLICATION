from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class Item(models.Model):
    Item_name=models.CharField(max_length=20)
    Item_description=models.TextField(max_length=255)
    # description2=models.TextField(max_length=255)
    # description3=models.TextField(max_length=255)
    # description4=models.TextField(max_length=255)
    Item_image=models.ImageField(upload_to='item_photos' ,default="default.jpeg")
    Item_type=models.CharField(max_length=30)
    Item_Quantity=models.IntegerField(default=0)
    Item_price=models.IntegerField(default=0)
    Created_at=models.DateTimeField(default=datetime.now)
    def __str__(self):
        return self.Item_name
class Cart(models.Model):
    name=models.ForeignKey(Item,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    Quantity=models.IntegerField(default=1)
    def __str__(self):
        return self.name.Item_name

class audio(models.Model):
    file= models.FileField(upload_to='media/')


# Create your models here.
