import { StyleSheet, Image, Text,View } from 'react-native'
import React from 'react';
import image from "../../../assets/images/icon.png";



const CartScreen = () => {
  // const handleCartOrder = ()=>{}
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.img} source={image}/>

        <Text style={styles.title}>Product</Text>
        <View style={styles.sideContainer}>
        <Text style={styles.quantity}>Quantity</Text>
        <Text style={styles.quantity}>Rs.Price</Text>
        </View>

      </View> 
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  container:{
    padding:16,
    marginTop:30,
    flex:1,
    justifyContent:'center'
  },
  innerContainer:{
    padding:10,
    margin:10,
    borderRadius:8,
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#FC785D',
  },
  img:{
    height:55,
    width:55,
    borderRadius:8,
    padding:4,
    margin:2,
    shadowColor:'#fff'
  },
  quantity:{
    fontSize:16,
    fontWeight:'200',
    padding:5
  },
  title:{
    fontSize:18,
    fontWeight:'300',
    padding:10
  },
  sideContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  }
});