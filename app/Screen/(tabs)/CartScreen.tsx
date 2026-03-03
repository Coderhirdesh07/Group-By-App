import { StyleSheet,View,Text} from 'react-native'
import React from 'react'

const CartScreen = () => {
  
  return (
    <View style = {styles.container}>
      
      <View style={styles.smallContainer}>
        <Text style={styles.totalPrice}>Total Price :</Text>
        <Text style={styles.priceItem}>price</Text>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:8,
    flexDirection:"column"
  },
  smallContainer:{
    display:"flex",
    flexDirection:'row',
    padding:8,
    margin:10,
    borderRadius:6
  },
  priceItem:{
    fontSize:16,
    fontWeight:"200",
    padding:4
  },
  totalPrice:{
    fontSize:20,
    fontWeight:"500",
    padding:4
  }
  
})