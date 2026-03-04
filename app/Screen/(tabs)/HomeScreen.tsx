import {  FlatList, StyleSheet,View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { API_CONFIG } from '@/app/config';
import { Product } from '@/app/constants/data';
import axios from 'axios';
import { retrieveItemFromStorage } from '@/app/storage';
import Card from '@/app/component/card/Card';

const HomeScreen = () => {
  const [products,setProducts] = useState<Product[]>([]);
  const [quantity,setQuantity] = useState<number>(0);

  function onIncrementQuantity(){
    setQuantity((prev)=>prev+1);
  }

  function onDecrementQuantity(){
    setQuantity((prev)=>Math.max(0,prev-1));
  }

  function handleCart(){}

  async function getAllProducts(){
    try{
      const token = await retrieveItemFromStorage("token");
      const response = await axios({
        method:"GET",
        url:`${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINT_1}`,
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      if(response.data){
       setProducts(response.data);
      }
      else setProducts([]);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllProducts();
  },[]);

  return (
    <View style = {styles.container}>
      <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item.productId}
      renderItem={(item)=>(
        <Card
        heading={item.item.productName}
        price={item.item.productPrice}
        quantity={quantity}
        onIncrement={onIncrementQuantity}
        onDecrement={onDecrementQuantity}
        handleCartItem={handleCart}
        />
      )}
      />
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    margin:5
  },
})