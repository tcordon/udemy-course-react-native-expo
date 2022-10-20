import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, collection, query, where, onSnapshot } from 'firebase/firestore'
import { UserNotLogged } from '../components/Favorites/UserNotLogged'

import { db } from '../data/firebase'

export const FavoritesScreen = () => {
  const [hasLogged, setHasLogged] = useState(null)
  const [restaurants, setRestaurants] = useState([])
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
      let restaurantArray = []
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

  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  )
}
