import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";


export default function rootLayout(){
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
        </Tab.Navigator>

    )
}