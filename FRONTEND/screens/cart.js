import { useState,useEffect } from "react";

import { ScrollView,Text,View,TouchableOpacity,FlatList,Image, StyleSheet, TextInput} from "react-native";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { ip1 } from "../App";





export const Cart=({route})=>{
    const [data,setData] = useState()
    const {userId}=useContext(AuthContext);
    // const { data1 }=route.params;
    

    const fet= async() =>{
        
        const response=await fetch(`http://${ip1}//Cart_list`)
        const dat=await response.json();
        setData(dat)
    };
    useEffect(()=>{fet();return ()=>{};},[]);
    console.log(data);

    return (
        <View>
            
            <FlatList
             data={data}
             keyExtractor={item=>item.id}
             renderItem={({item})=>{

                console.log(item.name.Item_image);
                return(
                    <View style={{display:"flex",justifyContent:"center"}}>
                        <View style={styles.card} >
                            <View style={{display:'flex', flexDirection:"row"}}>
                                
                                <View style={{width:'30%'}} >
                                    <Image source={{uri:`http://${ip1}//`+item.name.Item_image}} style={{height:110,width:110}}/>
                                </View >
                                <View style={{width:'70%',margin:20,}}> 
                                    <Text>Price:₹{item.name.Item_price}</Text>
                                    <View style={{display:"flex",flexDirection:"row"}}>
                                    <Text style={{fontSize:15}}>Qty:</Text>
                                    <TouchableOpacity style={{paddingHorizontal:5}}><Text>+</Text></TouchableOpacity>
                                    <Text>{item.name.Item_Quantity}</Text>
                                    <TouchableOpacity style={{paddingHorizontal:5}}><Text>-</Text></TouchableOpacity>
                                    </View>

                                    <Text>Total Amount:6000</Text>
                                </View>
                            </View>
                            <View style={styles.button_wrapper}>
                                <TouchableOpacity style={styles.button}><Text style={{textAlign:"center"}}>Buy now</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.button}><Text style={{textAlign:'center'}}>Save it for later</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
             }}
            
            />
            
        </View>
       
    );

}


styles=StyleSheet.create({
    button:{
        backgroundColor:"#ffffff",
        paddingVertical:15,
        width:175,
        marginHorizontal:0,
        marginBottom:0,
        borderRadius:0,
        borderWidth:0.18099,
        borderBlockColor:"black",
        elevation:1
        
        

    },
    button_wrapper:
    {
        display: "flex",
        flexDirection: "row",
        paddingTop:20,
        alignItems:'center',
        justifyContent:'center'




    }
    ,
    card:{
        display: "flex",
        // justifyContent:"center",
        margin:20,
        paddingHorizontal:10,
        paddingTop:20,
        backgroundColor:'#ffffff',
        paddingBottom:0,
        



    }
})
