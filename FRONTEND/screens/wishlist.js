import {View,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { data } from '../DummyData/dummy';

const WishList=()=>{
    // console.log(data)
    return(
        <View>
            <FlatList
            
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
                return(<View>
                    <Text style={{fontFamily:'YoungSerif-Regular'}}>
                        {item.prod_name }
                    </Text>

                </View>);
            }}
            
            
            
            />
            <Text>hlo</Text>
        </View>
    )
}
export default WishList;