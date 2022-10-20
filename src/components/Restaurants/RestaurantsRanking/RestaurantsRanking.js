import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Image, Icon } from '@rneui/base'
import { Rating } from 'react-native-ratings-movilizame'
import { useNavigation } from '@react-navigation/native'

import { style } from './RestaurantsRanking.styles'
import { screen } from '../../../data/screensData'

export function RestaurantsRanking (props) {
  const { index, restaurant } = props
  const restaurantData = restaurant.data()
  const navigation = useNavigation()

  const renderMedal = () => {
    const color = ['#ffd700', '#bebebe', '#cd7f32']
    if (index > 2) {
      return null
    }
    return (
      <Icon
        type='material-community'
        name='medal-outline'
        color={color[index]}
        containerStyle={style.medalContainer}
      />
    )
  }

  const goToRestaurant = () => {
    navigation.navigate(
      screen.restaurant.tab,
      {
        screen: screen.restaurant.screens.restaurant,
        params: { id: restaurantData.id }
      }
    )
  }

  return (
    <TouchableOpacity
      onPress={goToRestaurant}
    >
      <View style={style.content}>
        <Image
          style={style.image}
          source={{ uri: restaurantData.images[0] }}
        />
        <View style={style.infoContent}>
          <View style={style.nameContent}>
            {renderMedal()}
            <Text style={style.name}>{restaurantData.name}</Text>
          </View>
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
