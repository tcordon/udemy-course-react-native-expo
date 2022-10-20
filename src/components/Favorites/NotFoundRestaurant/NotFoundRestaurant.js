import React from 'react'
import { View } from 'react-native'
import { Text, Icon } from '@rneui/base'

import { style } from './NotFoundRestaurant.styles'

export function NotFoundRestaurant () {
  return (
    <View style={style.content}>
      <Icon
        type='material-community'
        name='alert-outline'
        size={80}
      />
      <Text style={style.text}>No tienes restaurantes en tu lista</Text>
    </View>
  )
}
