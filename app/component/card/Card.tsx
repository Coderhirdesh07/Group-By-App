import { StyleSheet, View,Image ,Text} from 'react-native'
import React from 'react'
import image from "../../../assets/images/icon.png";

interface CardProps{
  productTitle:string;
  price:number;
  imgUrl:string;
}
const Card = (cardData:CardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.productImg} source={image}/>
      <Text style={styles.heading}>Product</Text>

      <View style={styles.sideContainer}>
        <Text style={styles.price}>Price</Text>
        {/* here a component with increment will come */}
        <Text style={styles.price}>Inc.Comp</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container:{
    padding:8,
    marginTop:40,
    borderRadius:5,
    backgroundColor:'#F00971',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  productImg:{
    height:50,
    width:50,
    padding:5,
    marginVertical:5,
    borderRadius:5
  },
  heading:{
    fontSize:18,
    fontWeight:'300',
    padding:5,
    marginTop:5,
  },
  price:{
    fontSize:14,
    fontWeight:'200'
  },
  sideContainer:{
    display:"flex",
    flexDirection:"column",
    gap:2,
    justifyContent:'center'
  }


})