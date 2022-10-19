import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { doc, onSnapshot, collection, query, where, orderBy } from 'firebase/firestore'

import { style } from './Reviews.styles'
import { db } from '../../../data/firebase'

export function Reviews (props) {
  const { idRestaurant } = props
  const [reviews, setReviews] = useState(null)
  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      where('idRestaurant', '==', idRestaurant),
      orderBy('createdAt', 'desc')
    )

    onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs)
    })
  }, [])

  return (
    <View>
      <Text>Reviews</Text>
    </View>
  )
}
