import { StatusBar } from "expo-status-bar"
import { SafeAreaView, View ,Text, TextInput, TouchableOpacity, Image} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useKeyboardVisible } from "./keyboardVisible";
// import { url } from "./dummy";
import { useState } from "react";
import { useContext } from "react";
import {AuthContext} from './AuthContext';
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { AvatarData } from "../DummyData/dummy";
import Login from "./login";

// import { MaterialIcons } from '@expo/vector-icons';
// import { Registerstack } from "./stack"

export const Proj = () => {
    const nav = useNavigation();
    const {setAsync} = useContext(AuthContext)
    const keyBoard = useKeyboardVisible();
    const [username,setUsername]= useState();
    const [pas,setPas]= useState();
    const [conpas,setConpas]= useState();
    const [email,setEmail]= useState();
    const [height,setHeight] = useState(250);
    const [width,setWidth] = useState(350);
    const [Avatar,setAvatar] = useState('https://cdn-icons-png.flaticon.com/128/552/552909.png');
    const [color1,setColor] = useState('white');
   
    
    

    const sign = async() =>{
        if (pas!=conpas){
            alert("Passwords does not match..");
            return ;
        }
        const response = await fetch(url+'/signUp',
        {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },  
            body:JSON.stringify({'username':username, 'email':email, 'password':pas,'img':Avatar})
        }); 

        const data = await response.json();
        console.log(data.user);
        if(data.Sucess==null) {alert(data);return ;}
        setAsync(data.Token,data.user.id, data.img);
        nav.navigate("HomeStack")
    }
    return (

        <SafeAreaView style={{backgroundColor:color1,height:'100%'}}>
        <View style = {{}}>

        
               
        </View>




        </SafeAreaView>
    )
}
// export default Proj;