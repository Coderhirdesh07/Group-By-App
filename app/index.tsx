import { StyleSheet, Text, Button, View } from 'react-native'
import React from 'react'

const index = () => {
  const handleCartOrder = ()=>{}
  return (
    <View style={styles.container}>
      <Button title='Place your order'  onPress={handleCartOrder}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{},
})