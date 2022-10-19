import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, Collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import { screen } from '../../../data/screensData'
import { style } from './RestaurantsScreen.styles'
import { db } from '../../../data/firebase'

export const RestaurantsScreen = (props) => {
  const { navigation } = props
  const [currentUser, setCurrentUser] = useState(null)
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  useEffect(() => {
    const q = query(
      collection(db, 'restaurants'),
      orderBy('createdAt', 'desc')
    )

    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs)
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
