import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Text, Image } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

import { style } from './ListRestaurant.styles'
import { screen } from '../../../data/screensData'

export function ListRestaurant (props) {
  const { restaurants } = props
  const navigation = useNavigation()

  const goToRestaurante = (restaurant) => {
    navigation.navigate(screen.restaurant.screens.restaurant, { id: restaurant.id })
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
