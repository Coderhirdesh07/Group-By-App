import { Stack } from "expo-router";

export default function rootLayout(){
    return (
       <Stack screenOptions={{headerShown:false}}>
           <Stack.Screen name="SignUp"/>
           <Stack.Screen name="Login"/>
       </Stack>
    )
}