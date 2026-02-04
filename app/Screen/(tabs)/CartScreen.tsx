import { StyleSheet,View,FlatList } from 'react-native'
import React from 'react'
import Card from '@/app/component/card/Card'

const CartScreen = () => {
  
  return (
    <View style = {styles.container}>
      {/* <FlatList
       style={styles.list}
       key={}
       data={}
       renderItem={Card}
      /> */}
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:8
  },
  list:{

  }
})