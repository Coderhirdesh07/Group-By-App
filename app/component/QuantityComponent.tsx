import { StyleSheet, Text, View ,Pressable,Image} from 'react-native'
import React, { useState } from 'react'
import PlusIcon from "../../assets/icons/icons8-plus-100.png";
import MinusIcon from "../../assets/icons/icons8-minus-100.png";

const QuantityComponent = () => {
  const [quantity,setQuantity] = useState<number>(0);
  const handleIncrement = () => {
    setQuantity(prev=>prev+1);
  }
  const handleDecrement=()=>{
   setQuantity(prev=>Math.max(0,prev-1));
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={handleIncrement} accessibilityRole="button">
      <Image style={styles.img} source={PlusIcon}/>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={handleDecrement} accessibilityRole="button">
      <Image style={styles.img} source={MinusIcon} />
      </Pressable>
    </View>
  )
}

export default QuantityComponent

const styles = StyleSheet.create({
  container:{
    padding:10,
    display:'flex',
    flexDirection:'row',
    gap:5,
  },
  img:{
    height:25,
    width:25,
    padding:10,
    borderRadius:5,
    margin:5
  },
  quantity:{
    fontSize:20,
    fontWeight:'300',
    textAlign:'center',
    padding:10,
  }
})