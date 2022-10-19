import React from 'react'
import { View } from 'react-native'
import { Text } from '@rneui/base'
import { Rating } from 'react-native-ratings-movilizame'

import { style } from './Header.styles'

export function Header (props) {
  const { restaurant } = props
  return (
    <View style={style.content}>
      <View style={style.titleView}>
        <Text style={style.name}>{restaurant.name}</Text>
        <Rating
          imageSize={20}
          fractions={1}
          startingValue={restaurant.ratingMedia | 0}
          ratingCount={5}
          readonly
        />
      </View>
      <Text style={style.description}>{restaurant.description}</Text>
    </View>
  )
}
