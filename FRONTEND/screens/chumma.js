import { ScrollView,View,Image ,Text,StyleSheet} from "react-native"
import {useFonts} from 'expo-font';


 const Chumma=({route})=>{
    const { data } = route.params;
    console.log({data})
    const [loaded] =useFonts({
        Montserrat:require('../assets/fonts/Satoshi Variable.ttf'),
    });
    if(!loaded){
        return null;
    }
    return(
        
        <ScrollView style={{backgroundColor:"#ECE2D6"}}>
                <View style={styles.imgb}>
                     <Image style={styles.img}source={{uri:"http://172.16.121.201:8000//"+data.Item_image}} />
                    
                </View>
                <View style={{margin:30}}>
                    <Text style={{marginBottom:10,fontSize:25,fontFamily:"Satoshi Variable"}}>{data.Item_name}hhh</Text>
                    <Text style={{marginBottom:10,fontSize:20}}>Skin Type: All</Text>
                    <Text style={{marginBottom:10,fontSize:18}}>₹{data.Item_price}</Text>
                    <Text style={{marginBottom:10,fontSize:18}}>DESCRIPTION:</Text>
                    <Text style={{marginBottom:10,fontSize:18,marginLeft:30}}>{data.Item_description}</Text>
                </View>
            
                
        </ScrollView>
    )

    
}
const styles = StyleSheet.create({
    img:{
       
        
        height:300,
        width:300,

    },
    imgb:{
        flex:1,

        alignItems: 'center',
        padding:30,
        backgroundColor:'white',

    }
})
export default Chumma