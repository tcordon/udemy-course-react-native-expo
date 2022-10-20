import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, AirbnbRating, Avatar } from '@rneui/themed'
import { Rating } from 'react-native-ratings-movilizame'
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore'
import { map, size } from 'lodash'
import { DateTime } from 'luxon'
import 'intl'
import 'intl/locale-data/jsonp/es'

import { style } from './Reviews.styles'
import { db } from '../../../data/firebase'
import { Loading } from '../../Shared'
import { ListItem } from '@rneui/base'

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

  if (!reviews) {
    return <Loading show text='Cargando...' />
  }

  return (
    <View style={style.content}>
      {map(reviews, (review) => {
        const data = review.data()
        const createdReview = new Date(data.createdAt.seconds * 1000)

        return (
          <ListItem key={data.id} bottomDivider containerStyle={style.review}>
            <Avatar source={{ uri: data.avatar }} />
            <ListItem.Content>
              <ListItem.Title
                title='Titulo'
                style={style.title}
              >
                {data.title}
              </ListItem.Title>
              <View style={style.subtitle}>
                <Text style={style.comment}>{data.comment}</Text>
                <View style={style.cntentRatingData}>
                  <AirbnbRating
                    defaultRating={data.rating}
                    showRating={false}
                    size={20}
                    isDisabled
                    starContainerStyle={style.starContainer}
                  />
                  <Text style={style.date}>{DateTime.fromISO(createdReview.toISOString()).toFormat('yyyy/LL/dd - hh:mm')}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        )
      })}
    </View>
  )
}
