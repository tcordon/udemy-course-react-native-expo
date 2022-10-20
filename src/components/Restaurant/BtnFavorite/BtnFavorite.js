import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base'

import { style } from './BtnFavorite.styles'

export function BtnFavorite (props) {
  const { idRestaurant } = props

  const addFavorite = () => {
    console.log('añadir a favoritos')
  }

  return (
    <View style={style.content}>
      <Icon
        type='material-community'
        name='heart-outline'
        color='#c2c2c2'
        size={35}
        onPress={addFavorite}
      />
    </View>
  )
}
