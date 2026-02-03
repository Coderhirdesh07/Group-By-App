import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import OrdersScreen from "./OrdersScreen";
import { View,Image } from "react-native";
import HomeIcon from "../../../assets/icons/icons8-home-100.png";
import OrderIcon from "../../../assets/icons/icons8-order-100.png";
import CartIcon from "../../../assets/icons/icons8-cart-100.png";
import {useSelector} from "react-redux";
export default function rootLayout(){
    const Tab = createBottomTabNavigator();
    let itemCount = useSelector((state:RootState)=>state.cart.noOfItems);
    return (
        <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:true}}>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{padding:6,borderRadius:18,backgroundColor:focused?'#007AFF' : 'transparent'}}>
                        <Image source={HomeIcon} style={{height:24,width:24,tintColor:focused ? 'white' : '#8e8e93'}}/>
                    </View>
                )
            }}
            />
            <Tab.Screen
             name="Cart"
             component={CartScreen}
             options={{
                tabBarIcon:({focused})=>(
                    <View style={{padding:6,borderRadius:18,backgroundColor:focused?'#007AFF' : 'transparent'}}>
                        <Image source={CartIcon} style={{height:24,width:24,tintColor:focused ? 'white' : '#8e8e93'}}/>
                    </View>
                ),
                tabBarBadge:(itemCount>0)?itemCount:undefined
             }}

             />
            <Tab.Screen 
            name="Orders" 
            component={OrdersScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{padding:6,borderRadius:18,backgroundColor:focused?'#007AFF' : 'transparent'}}>
                        <Image source={OrderIcon} style={{height:24,width:24,tintColor:focused ? 'white' : '#8e8e93'}}/>
                    </View>
                )
            }}
         />

        </Tab.Navigator>

    )
}