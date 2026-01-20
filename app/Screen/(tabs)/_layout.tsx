import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import OrdersScreen from "./OrdersScreen";

export default function rootLayout(){
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Orders" component={OrdersScreen}/>
        </Tab.Navigator>

    )
}