import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/index';
import Details from '../screens/item-details';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Cart}  from '../screens/cart';
import { useNavigation } from '@react-navigation/native';
import WishList from '../screens/wishlist';
import Login from '../screens/login';
import { AuthContext } from '../screens/AuthContext';
import { useContext } from 'react';
import { Proj } from '../screens/proj';
import Chumma  from '../screens/chumma';
import { Questions } from '../screens/Questions';


const Stack = createStackNavigator();

function MyStack() {
    const navigattion=useNavigation();
    const {userId}=useContext(AuthContext)
    
  return (
    <Stack.Navigator 
        screenOptions={
           { headerLeft: ()=>{
                return(
                    <TouchableOpacity style={styles.icon} onPress={()=>navigattion.toggleDrawer()}>
                        <Feather name="menu" size={35} color="black" />
                    </TouchableOpacity>
                );},
                headerRight: ()=>{
                    return(
                        <TouchableOpacity style={styles.icon} onPress={()=>{navigattion.navigate('Cart',{data1:userId})}}>
                            <AntDesign name="shoppingcart" size={30} color="black" />
                        </TouchableOpacity>
                    );
                }
                


            }
           
        }
    >
      <Stack.Screen  name="Nykaa" component={Home}  />
      <Stack.Screen name="Details" component={Details} />
      
      <Stack.Screen  name="Cart" component={Cart} />
      <Stack.Screen name='chumma' component={Chumma} 
      
      options={{
        headerStyle:{backgroundColor:"#ECE2D6"},
        headerLeft:()=>{
            return(
                <TouchableOpacity onPress={()=>navigattion.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                
            )
        }
      }}
      
      />
      <Stack.Screen name='Proj' component={Proj}
       options={{
        headerStyle:{backgroundColor:"#ECE2D6"},
        headerLeft:()=>{
            return(
                <TouchableOpacity onPress={()=>navigattion.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                
            )
        }
      }}
      />
      
    </Stack.Navigator>
  );
}



export const CartStack=()=>{
    const navigattion=useNavigation();
    return(
        <Stack.Navigator 
        screenOptions={{
            headerLeft:()=>{
                return(<TouchableOpacity onPress={()=>navigattion.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>)
            },
            headerShown:true


        }}>
            <Stack.Screen name='cart' component={Cart}/>
        </Stack.Navigator>

    );
}

 export const WishListStack=()=>{
    const navigattion=useNavigation();
    return(<Stack.Navigator 
        screenOptions={{
            headerLeft:()=>{
                return(<TouchableOpacity onPress={()=>navigattion.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>)
            },
            headerShown:true


        }}>
        <Stack.Screen name="wish" component={WishList}/>

    </Stack.Navigator>)
 }
export const LoginStack=()=>{
    const navigattion=useNavigation();
    return(<Stack.Navigator 
        screenOptions={{headerShown:false}}
       >
        <Stack.Screen name="login" component={Login}/>

    </Stack.Navigator>)
    
}
export const ProjStack=()=>{
    const navigattion=useNavigation();
    return(<Stack.Navigator 
        screenOptions={{
            headerLeft:()=>{
                return(<TouchableOpacity onPress={()=>navigattion.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>)
            },
            headerShown:true


        }}>
        <Stack.Screen name="Proj" component={Proj}/>

    </Stack.Navigator>)
}

export const QuestionsStack=()=>{
    return(
        <Stack.Navigator
        screenOptions={
            { headerLeft: ()=>{
                 return(
                     <TouchableOpacity style={styles.icon} onPress={()=>navigattion.toggleDrawer()}>
                         <Feather name="menu" size={35} color="black" />
                     </TouchableOpacity>
                 );},
                 headerRight: ()=>{
                     return(
                         <TouchableOpacity style={styles.icon} onPress={()=>{navigattion.navigate('Cart',{data1:userId})}}>
                             <AntDesign name="shoppingcart" size={30} color="black" />
                         </TouchableOpacity>
                     );
                 }
                 
 
 
             }
            
         }
        >
            <Stack.Screen name="questions" component={Questions}/>

        </Stack.Navigator>
    )

}


const styles=StyleSheet.create({

    icon:{
        paddingTop:6 ,
        paddingBottom:6,
        paddingHorizontal:10,
    },
    heading:{
        flex:1,
        alignItems:'center',

    }
    

});
export default MyStack;

