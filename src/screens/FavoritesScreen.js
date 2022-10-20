import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, collection, query, where, onSnapshot } from 'firebase/firestore'
import { size, map } from 'lodash'

import { UserNotLogged, NotFoundRestaurant } from '../components/Favorites'
import { db } from '../data/firebase'
import { Loading } from '../components/Shared'
import { RestaurantFavorite } from '../components/RestaurantFavorite'

export const FavoritesScreen = () => {
  const [hasLogged, setHasLogged] = useState(null)
  const [restaurants, setRestaurants] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user)
    })
  }, [])

  useEffect(() => {
    const q = query(
      collection(db, 'favorites'),
      where('idUser', '==', auth.currentUser.uid)
    )
    onSnapshot(q, async (snapshot) => {
      const restaurantArray = []
      for await (const item of snapshot.docs) {
        const data = item.data()
        const docRef = doc(db, 'restaurants', data.idRestaurant)
        const docSnap = await getDoc(docRef)
        const newData = docSnap.data()
        newData.idFavorite = data.id
        restaurantArray.push(newData)
      }
      setRestaurants(restaurantArray)
    })
  }, [])

  if (!hasLogged) {
    return (<UserNotLogged />)
  }

  if (!restaurants) {
    return (<Loading text='Cargando...' />)
  }

  if (size(restaurants) === 0) {
    return <NotFoundRestaurant />
  }

  return (
    <ScrollView>
      {map(restaurants, (restaurant) => {
        return <RestaurantFavorite key={restaurant.id} restaurant={restaurant} />
      })}
    </ScrollView>
  )
}
