import { StyleSheet, Text, View ,Pressable,Image} from 'react-native'
import React from 'react'
import PlusIcon from "../../assets/icons/icons8-plus-100.png";
import MinusIcon from "../../assets/icons/icons8-minus-100.png";

type Props = {
  quantity:number;
  onIncrement:()=>void;
  onDecrement:()=>void;
}


const QuantityComponent = ({quantity,onIncrement,onDecrement}:Props) => {
  
  return (
    <View style={styles.container}>
      <Pressable onPress={onIncrement} accessibilityRole="button">
      <Image style={styles.img} source={PlusIcon}/>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onDecrement} accessibilityRole="button">
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
    paddingRight:10,
    marginHorizontal:10,
    borderRadius:5,
    margin:5
  },
  quantity:{
    fontSize:20,
    fontWeight:'300',
    textAlign:'center',
    padding:12,
  }
})