import React, { useState,useEffect } from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { data2 } from '../DummyData/dummy';

export const Questions = () => {
    // const [data,setData]=useState(null)
    // const fet=async()=>{
    //     const response = await fetch("http://172.17.4.172:8000/")
    //     const dat=await response.json()
    //     console.log(dat.user)
    //     setData(dat);
    


    // };

    // useEffect(()=>{fet();return ()=>{};},[]);
    console.log({data2});
  return (
    <View style={{display:'flex',padding:10}}>
        <View style={{alignItems:'center',paddingVertical:10,marginTop:12}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',borderWidth:0.3,height:57,width:'100%',borderRadius:25}}>
                <View style={{marginLeft:20,width:'80%'}}>
                    <TextInput placeholder='Search...'/>

                </View>
                <View style={{marginLeft:10}}>
                <FontAwesome5 name="search" size={24} color="#2AA18B" />

                </View>

            </View>
            

        </View>
        <View style={{padding:10,display:'flex',flexDirection:'row',marginBottom:10}} >

             <TouchableOpacity style={styles.buttons} ><Text>Recent</Text></TouchableOpacity>
             <TouchableOpacity style={styles.buttons}><Text>Popular</Text></TouchableOpacity>

        </View>
            <FlatList
                data={data2}
                keyExtractor={item => item['id']}
                renderItem={({item})=>{
                  
                    return(
                    <View style={{borderBottomWidth:0.3,borderBottomColor:'grey',}}>
                        <View style={{paddingVertical:10,display:'flex',flexDirection:'row',minHeight:109}}>
                            <View style={{width:'90%'}}>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                   <Text style={{marginRight:10,fontSize:14,color:'grey'}}> @{item.name}</Text>
                                   <Text style={{marginRight:10,fontSize:14,color:'grey'}}>2d</Text>

                                </View>
                                <View  style={{paddingVertical:12}}>
                                <Text style={{fontSize:17}}>{item.question}</Text>
                                </View>


                                <View style={{marginTop:6,marginBottom:1}}>
                                    <Text style={{fontSize:12,color:'#2AA18B'}}>59 answers</Text>
                                    
                                </View>
                            
                            </View>
                            <View>
                            <AntDesign name="heart" size={16} color="white" />
                            <Text style={{fontSize:12,color:'grey'}}>{item.likes}</Text>
                            


                            </View>
                        </View>
                    </View>
                    );
                }}
            />
    </View>
  )
}

const styles=StyleSheet.create({
    input:{

    },
    buttons:{
        marginRight:10,
        width:106,
        borderWidth:0.3,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25

    },
    buttonsContainer:{

    }


})