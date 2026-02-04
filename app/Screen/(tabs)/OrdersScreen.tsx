import { StyleSheet, View ,Text, FlatList} from 'react-native'
import React,{useEffect, useState} from 'react'
import CartOrderCard from '@/app/component/card/CartOrderCard'
import { API_CONFIG } from '@/app/config'
import { Orders } from '@/app/constants/data'
const OrdersScreen = () => {
  const [order,setOrders] = useState<Orders | null>(null);

  // async function fetchOrders(){
  //   try{
  //     const response = await fetch(`${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINT}`);
  //     if(response){ 
  //       setOrders(response);
  //     }
  //     else  setOrders(null);
  //   }
  //   catch(error){
  //     console.log("error occured");
  //     throw error;
  //   }
  // }
  // useEffect(()=>{
  //   fetchOrders();
  // },[]);

  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>All Orders</Text>
      <View style={styles.innerContainer}>
        {/* <FlatList
        key={order?.productId}
        data={order}
        renderItem={CartOrderCard}
        /> */}
      </View>
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
  },
  heading:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'bold',
    padding:8
  },
  innerContainer:{
    padding:5,
    borderRadius:4,
    justifyContent:'center'
  }

})