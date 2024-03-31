import 'react-native-gesture-handler';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'

import { Touchable, TouchableOpacity, View } from 'react-native';
import MyStack from '../stack/stack';
import { ChummaStack } from '../stack/stack';
import {CartStack}  from '../stack/stack';
import { WishListStack } from '../stack/stack';
import { LoginStack } from '../stack/stack';
import { ProjStack } from '../stack/stack';
import { QuestionsStack } from '../stack/stack';


const Drawer=createDrawerNavigator();



// export const DrawerList=(props)=>{
//     return(
//     <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props}/>
//     </DrawerContentScrollView>);

// }

const DrawerList=()=>{
    return( <Drawer.Navigator screenOptions={{headerShown:false}}>
                <Drawer.Screen name="Home" component={MyStack}/>
                <Drawer.Screen name="Cart" component={CartStack}/>
                <Drawer.Screen name="WishList" component={WishListStack}/>
                <Drawer.Screen name='Login' component={LoginStack}/>
                <Drawer.Screen name='proj' component={ProjStack}/>
                <Drawer.Screen name='questions' component={QuestionsStack}/>
                {/* <ChummaStack.Screen name='Chumma' component={ChummaStack}/> */}

               
            </Drawer.Navigator>);

}
export default DrawerList;