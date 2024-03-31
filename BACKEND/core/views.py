from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User,auth
from .models import Item,audio,Cart
from rest_framework.response import Response
from .serializers import Items,CartSerializer
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import matplotlib.pyplot as plt




@login_required(login_url='login')
def index(request):

    a=[1,2,3,4,5,6]
    b=[1,2,3,4,5,6]
    c=plt.plot(a,b)
    plt.show()

    aud=audio.objects.all()
    if request.method == 'POST':
        name = request.POST['product name']
        description = request.POST['description']
        item_type=request.POST['type']
        price=request.POST['price']
        print(name)
        item=Item.objects.create(Item_name=name,Item_description=description,Item_type=item_type,Item_price=price)
        
        item.save()
        return redirect('/')
    
    lips=Item.objects.filter(Item_type='lips');
    face=Item.objects.filter(Item_type='face')
    print(audio.file)

    return render(request,'index.html',{'items':lips,'face':face,'audio':aud})
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
    return render(request,'login.html')
@api_view(['GET'])
def Item_list(request):
    item_list=Item.objects.all()
    serializers=Items(item_list,many=True).data
    return Response(serializers)
@api_view(['GET'])
def Cart_list(request):
    Cart_list=Cart.objects.filter()
    serializers=CartSerializer(Cart_list,many=True).data
    return Response(serializers)
@api_view(["POST"])
def loginBack(request):
    data=request.data
    user=User.objects.get(username=data['username'])
    return Response({'userId':user.id})



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['id']=user.id
        
        # ...

        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["POST"])
def addCart(request,pk):
    data=request.data
    x=User.objects.get(id=pk)
    cart = Item.objects.get(Item_name=data['Item_name'])
    
    cartObj=Cart.objects.create(user=x,name=cart)

    cartObj.save()
    return Response('created sucessfully')






