import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

interface CardProps {
  productTitle: string
  price: number
  imgUrl: string
}

const index = ({ productTitle, price, imgUrl }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImg}
        source={{ uri: imgUrl }}
      />

      <View style={styles.content}>
        <Text style={styles.heading} numberOfLines={1}>
          Hello
        </Text>

        <Text style={styles.price}>₹ {20}</Text>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 10,
    marginHorizontal: 16,
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

  productImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#f2f2f2',
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
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F00971',
  },
})
