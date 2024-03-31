import { useNavigation } from "@react-navigation/native";
import { View,Text, TouchableOpacity,ScrollView, ImageBackground, FlatList,Image } from "react-native"
import { StyleSheet } from "react-native";
import Chumma  from "./chumma";
import { useState, useEffect } from "react";
import {Cart}  from "./cart";
import Details from "./item-details";
import { Audio } from 'expo-av';
import { useFonts } from 'expo-font';
import { AuthContext } from "./AuthContext";
import { useContext } from "react";


// import {  } from "react-native-gesture-handler";

// const s={uri:'https://drive.google.com/file/d/1KKR0gm61ibHOe8ERokjoe_kCU-uRatDn/view'}
const image={uri:"https://www.gethucinema.com/wp-content/uploads/2021/12/KatrinaKaif-64.jpg"}
const ip="192.168.79.51"
const Home =(props)=>{
    const {userId} = useContext(AuthContext);
    const [data,setData] = useState();
    const navigation=useNavigation();
    alert(userId)
    const fet = async()=>{
        const response = await fetch('http://'+ip+':8000/Item_list');
        const da = await response.json();
        setData(da);
    };
    useEffect(()=>{fet();return ()=>{};},[]);
    const adc =async(userId,Item_name)=>{
        const response=await fetch("http://"+ip+"//addCart/"+userId,
        {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({"Item_name":Item_name}),
        })

    }
    
    return (<ScrollView style={{backgroundColor:'#ebeaef'}}>
        
            <ImageBackground source={image}  style={{height:400,marginBottom:10}}>
                <View style={{flex:1 ,justifyContent:"center",alignItems:"center",padding:5,marginTop:250,marginBottom:10,borderColor:"white",borderWidth:2,marginHorizontal:40,borderRadius:35}}>
                <Text style={{color:'white' ,fontSize:18,opacity:100}}>
                     "May you know the softness that comes from being Well-loved" 
                    
                </Text>
                </View>
               

            </ImageBackground>
            <FlatList 
            
                data={data}
                keyExtractor={item =>item.id}
                renderItem={({item})=>{
                    return(
                        <View style={{flex:1,alignItems:"center"}}>
                            <View style={styles.card}>
                                <View style={styles.img}>
                                    <TouchableOpacity  onPress={()=>{navigation.navigate('chumma',{data:item})}}>
                                    <Image source={{uri:"http://"+ip+":8000//"+item.Item_image}} style={{height:150,width:150,marginTop:50}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{margin:5}}>
                                <TouchableOpacity>
                                   <Text>{item.Item_name}</Text>
                                   <Text>{item.Item_price}</Text>
                                   </TouchableOpacity>


                                </View>
                                <View style={{flex:1,flexDirection:'row'}} >
                                    
                                    <TouchableOpacity style={styles.btn} onPress={()=>adc(userId,item.Item_name)} >
                                        <Text>Add to Cart</Text>
                                    </TouchableOpacity>
                                    
                                   
                                    <TouchableOpacity style={styles.btn} >
                                        
                                        <Text>Buy Now</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>

                    )
                }}

            
            
            />
           
            
               


    </ScrollView>);
    
}
const styles = StyleSheet.create({


    card:
    {
        flex:1,
                
        backgroundColor:'white',
        paddingVertical:20,
        paddingHorizontal:40,
        margin:10
        
        


    },
    img:{
        flex:1,
        alignItems:'center',
        height:250,
        width:250,


    },
    btn:{
        flex:1
,
        width:200, 
        alignItems:"center"      , 
        // marginRight:10,
        marginHorizontal:5,

        paddingHorizontal:10,
        backgroundColor:'#A87B5E',
        paddingVertical:15,
        borderRadius:25,

    }
   
   

})
export default Home;