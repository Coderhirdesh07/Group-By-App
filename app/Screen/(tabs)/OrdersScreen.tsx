import { StyleSheet, View ,Text, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react';
import { API_CONFIG } from '@/app/config';
import { Orders } from '@/app/constants/data';
import axios from 'axios';
import { retrieveItemFromStorage } from '@/app/storage';
import CartOrderCard from '@/app/component/card/CartOrderCard';

const OrdersScreen = () => {
  const [order,setOrders] = useState<Orders[]>([]);

  async function fetchOrders(){
    try{
      const token = await retrieveItemFromStorage("token");
      const response = await axios({
        method:"GET",
        url:`${API_CONFIG.BASE_URL}/${API_CONFIG.ENPOINT_2}`,
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      if(response.data){
        setOrders(response.data);
      }
      else setOrders([]);
    }
    catch(error){
      console.log("error occured");
      throw error;
    }
  }
  useEffect(()=>{
    fetchOrders();
  },[]);

  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>All Orders</Text>

      <View style={styles.innerContainer}>
        <FlatList
        data={order}
        keyExtractor={(item)=>item.productId}
        renderItem={({item})=>(
          <CartOrderCard 
           quantity={item.productQuantity}
           productHeading={item.productName} 
           productPrice={item.productPrice}/>
        )}
        />
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