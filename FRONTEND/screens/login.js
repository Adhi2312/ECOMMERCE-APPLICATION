import { View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React,{useContext,useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {AuthContext} from "./AuthContext";

const Login=()=>{
    const {login, logout} = useContext(AuthContext);

    const [pas,setPas]=useState(true);
    
    const nav=useNavigation();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    return(
        <View style={styles.wr} >
            <View style={styles.input}>
              
            <Text style={{textAlign:'center',marginVertical:20,fontSize:20}}>LOGIN</Text>
            <TextInput style={styles.inputfield} placeholder="enter your email" onChangeText={text=>{setUsername(text)}}/>
            <TextInput style={styles.inputfield} placeholder="Enter your password" onChangeText={text=>{setPassword(text)}}/>
           
            <TouchableOpacity style={styles.button} onPress={()=>{console.log("hii"+username) ;login(username,password)}}><Text style={{color:'white'}} >Login</Text></TouchableOpacity>
            
        </View>
        </View>
        
    );
}
export default Login;
const styles = StyleSheet.create({

    input:{
        
        
        padding:"10%",
        height:'auto',
        
        
        borderRadius:20,

        // marginHorizontal:10,
        // marginVertical:50,
     
        elevation:10,
        shadowColor:"black",
        backgroundColor:'white'
    },
    wr:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    inputfield:{paddingVertical:12,paddingLeft:15,marginVertical:20,width:280,borderWidth:1,borderColor:'grey',borderRadius:10},
    button:{paddingVertical:12,borderColor:'black',elevation:1,paddingLeft:15,marginVertical:20,width:280,alignItems:'center',backgroundColor:'black'}
})

