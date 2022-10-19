import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { doc, collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'

import { style } from './RestaurantScreen.styles'
import { db } from '../../../data/firebase'

export function RestaurantScreen (props) {
  const { route } = props
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    setRestaurant(null)

    onSnapshot(doc(db, 'restaurants', route.params.id), (doc) => {
      setRestaurant(doc.data())
    })
  }, [route.params.id])

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  )
}
