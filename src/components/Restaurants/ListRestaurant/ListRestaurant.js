import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Text, Image } from '@rneui/base'

import { style } from './ListRestaurant.styles'

export function ListRestaurant (props) {
  const { restaurants } = props

  const goToRestaurante = (restaurant) => {
    console.log('Ir al restaurante', restaurant.name)
  }

  return (
    <FlatList
      data={restaurants}
      renderItem={(doc) => {
        const restaurant = doc.item.data()
        return (
          <TouchableOpacity
            onPress={() => goToRestaurante(restaurant)}
          >
            <View style={style.content}>
              <Image
                source={{ uri: restaurant.images[0] }}
                style={style.image}
              />
              <View>
                <Text style={style.name}>{restaurant.name}</Text>
                <Text style={style.info}>{restaurant.address}</Text>
                <Text style={style.info}>{restaurant.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}
