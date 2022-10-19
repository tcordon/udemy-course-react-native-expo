import React, { useState, useEffect } from 'react'
import { ScrollView, Text, Dimensions } from 'react-native'
import { doc, collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'

import { style } from './RestaurantScreen.styles'
import { db } from '../../../data/firebase'
import { Carousel, Loading } from '../../../components/Shared'

export function RestaurantScreen (props) {
  const { route } = props
  const { width } = Dimensions.get('window')
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    setRestaurant(null)

    onSnapshot(doc(db, 'restaurants', route.params.id), (doc) => {
      setRestaurant(doc.data())
    })
  }, [route.params.id])

  if (!restaurant) return <Loading show text='Cargando Restaurante...' />

  return (
    <ScrollView style={style.content}>
      <Text>RestaurantScreen</Text>
      <Carousel
        arrayImages={restaurant.images}
        height={250}
        width={width}
      />
    </ScrollView>
  )
}
