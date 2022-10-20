import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Image, Icon } from '@rneui/base'
import { Rating } from 'react-native-ratings-movilizame'

import { style } from './RestaurantsRanking.styles'

export function RestaurantsRanking (props) {
  const { index, restaurant } = props
  const restaurantData = restaurant.data()
  return (
    <TouchableOpacity
      onPress={() => console.log('Got to screen!')}
    >
      <View style={style.content}>
        <Image
          style={style.image}
          source={{ uri: restaurantData.images[0] }}
        />
        <View style={style.infoContent}>
          <Text style={style.name}>{restaurantData.name}</Text>
          <Rating
            imageSize={15}
            readonly
            startingValue={restaurantData.ratingMedia}
          />
        </View>
        <Text style={style.description}>{restaurantData.description}</Text>
      </View>
    </TouchableOpacity>
  )
}
