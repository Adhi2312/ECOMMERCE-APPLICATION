import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Home  from './screens/index';
import MyStack from './stack/stack';
import { AuthContext,AuthProvider } from './screens/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
import DrawerList  from './Drawer/drawer';
import React, { useContext, useState } from 'react';
import { AppNav } from './screens/AppNav';




export const ip1="/192.168.79.51:8000/";
export default function App() {

  
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
      
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
