import React,{ useContext } from 'react';
import DrawerList  from '../Drawer/drawer';
import { AuthContext } from './AuthContext';

import { NavigationContainer } from '@react-navigation/native';

export const AppNav = () => {
  const {isLoading, userToken} =  useContext(AuthContext);
//   if (isLoading){
//     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

//         <ActivityIndicator size = {'large'}/>
//     </View>
//   }
  return (
    <NavigationContainer>
        <DrawerList/>
    </NavigationContainer>
  )
}