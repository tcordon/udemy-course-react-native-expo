import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { screen } from '../../../data/screensData'
import { style } from './RestaurantsScreen.styles'

export const RestaurantsScreen = (props) => {
  const { navigation } = props
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.tab, { screen: screen.restaurant.screens.addRestaurant })
  }

  return (
    <View style={style.content}>
      <Text>Estamos en la screen Restaurnats</Text>
      {
        currentUser &&
        (
          <Icon
            reverse
            type='material-community'
            name='plus'
            color='#00a680'
            containerStyle={style.btnContainer}
            onPress={goToAddRestaurant}
          />
        )
      }
    </View>
  )
}
