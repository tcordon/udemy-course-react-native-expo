import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Image, Icon, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { doc, deleteDoc } from 'firebase/firestore'

import { style } from './RestaurantFavorite.styles'
import { screen } from '../../data/screensData'
import { db } from '../../data/firebase'

export function RestaurantFavorite (props) {
  const { restaurant } = props
  const navigation = useNavigation()

  const goToRestaurant = () => {
    navigation.navigate(
      screen.restaurant.tab,
      {
        screen: screen.restaurant.screens.restaurant,
        params: { id: restaurant.id }
      }
    )
  }

  const onRemoveFavorite = async () => {
    try {
      await deleteDoc(
        doc(db, 'favorites', restaurant.idFavorite)
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TouchableOpacity onPress={goToRestaurant}>
      <View style={style.content}>
        <Image
          source={{ uri: restaurant.images[0] }}
          style={style.image}
        />
        <View style={style.infoContent}>
          <Text style={style.name}>{restaurant.name}</Text>
          <Icon
            type='material-community'
            name='heart'
            color='#ff0000'
            size={35}
            containerStyle={style.iconContainer}
            onPress={onRemoveFavorite}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
