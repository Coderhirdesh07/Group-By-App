import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '@/app/constants/data';
import { API_CONFIG } from '@/app/config';
const HomeScreen = () => {
  const [products,setProducts] = useState<Product | null>(null);
  async function getAllProducts(){
    try{
      const response = await fetch(`${API_CONFIG.BASE_URL}`);
      if(!response.ok){
        throw new Error("Error occured");
      }
      const items = await response.json();
      setProducts(items);
    }
    catch(error){
      console.log(error);
    }

  }
  useEffect(()=>{
    getAllProducts();
  },[]);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})