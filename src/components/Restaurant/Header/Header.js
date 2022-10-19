import React from 'react'
import { View } from 'react-native'
import { Text, Rating } from '@rneui/base'

import { style } from './Header.styles'

export function Header (props) {
  const { restaurant } = props
  return (
    <View style={style.content}>
      <View style={style.titleView}>
        <Text style={style.name}>{restaurant.name}</Text>
        <Rating
          imageSize={20}
          readonly
          startingValue={4}

        />
      </View>
      <Text style={style.description}>{restaurant.description}</Text>
    </View>
  )
}
