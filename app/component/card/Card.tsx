import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import React from 'react';
import icon from "../../../assets/images/icon.png";
import QuantityComponent from '../QuantityComponent';

type CardProps = {
  heading:string;
  price:number;
  quantity:number;
  onIncrement:()=>void;
  onDecrement:()=>void;
  handleCartItem:()=>void;
}

const Card = ({heading,price,quantity,onDecrement,onIncrement,handleCartItem}:CardProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImg}
        source={icon}
      />

      <View style={styles.content}>
        <Text 
         style={styles.heading}
         numberOfLines={1} >
          Heading
        </Text>

        <Text style={styles.price}>₹ Price</Text>
      </View>
      <View style={styles.sideContainer}>
        <QuantityComponent 
         quantity={quantity} 
         onDecrement={onDecrement}
         onIncrement={onIncrement}
         />
        <Pressable style={styles.cartButton} onPress={handleCartItem}>
          <Text style={styles.cartText}>Add to cart</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#fff',

    // Shadow (Android)
    elevation: 4,

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  sideContainer:{
    flexDirection:"column",
    paddingRight:2,
    margin:5,
  },
  cartText:{
    textAlign:'center',
    fontSize:14,
    padding:5,
    color:'#fff'
  },

  productImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 12,
    padding:8,
    backgroundColor: '#f2f2f2',
  },
  cartButton:{
    padding:4,
    backgroundColor:'#666bf9',
    borderRadius:8,
    paddingRight:8,
    marginRight:6
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
    paddingLeft:8
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    paddingLeft:8,
    color: '#F00971',
  },
})
