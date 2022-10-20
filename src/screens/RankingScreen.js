import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore'
import { map } from 'lodash'

import { db } from '../data/firebase'
import { RestaurantsRanking } from '../components'

export const RankingScreen = () => {
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    const q = query(
      collection(db, 'restaurants'),
      orderBy('ratingMedia', 'desc'),
      limit(10)
    )

    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs)
    })
  }, [])

  return (
    <ScrollView>
      {map(restaurants, (restaurant, index) => (
        <RestaurantsRanking
          key={index}
          index={index}
          restaurant={restaurant}
        />
      ))}
    </ScrollView>
  )
}
