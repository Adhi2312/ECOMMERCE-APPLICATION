from rest_framework import serializers
from .models import Item,Cart
class Items(serializers.ModelSerializer):
    class Meta:
        model=Item
        fields='__all__'

class CartSerializer(serializers.ModelSerializer):
    name = Items(Cart.name)
    class Meta:
        model=Cart
        fields=['name', 'Quantity']