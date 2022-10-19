import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, Button } from '@rneui/base'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { query, collection, where, onSnapshot } from 'firebase/firestore'
import { size } from 'lodash'

import { style } from './BtnReviewForm.styles'
import { screen } from '../../../data/screensData'
import { db } from '../../../data/firebase'

export function BtnReviewForm (props) {
  const { idRestaurant } = props
  const [hasLogged, setHasLogged] = useState(false)
  const [hasReview, setHasReview] = useState(false)
  const auth = getAuth()
  const navigation = useNavigation()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user)
    })
  })

  useEffect(() => {
    if (hasLogged) {
      const q = query(
        collection(db, 'reviews'),
        where('idRestaurant', '==', idRestaurant),
        where('idUser', '==', auth.currentUser.uid)
      )

      onSnapshot(q, (snapshot) => {
        if (size(snapshot.docs) > 0) {
          setHasReview(true)
        }
      })
    }
  }, [hasLogged])

  const goToLogin = () => {
    navigation.navigate(screen.account.tab, {
      screen: screen.account.screens.login
    })
  }

  const goToAddReview = () => {
    navigation.navigate(screen.restaurant.screens.addReviewRestaurant, { idRestaurant })
  }

  if (hasLogged && hasReview) {
    return (
      <View style={style.content}>
        <Text style={style.textSendReview}>
          Ya has enviado un review de este restaurante
        </Text>
      </View>
    )
  }

  return (
    <View style={style.content}>
      {
        hasLogged
          ? <Button
              title='Escribe una opinión'
              icon={
                {
                  type: 'material-community',
                  name: 'square-edit-outline',
                  color: '#00a680'
                }
              }
              buttonStyle={style.button}
              titleStyle={style.btnText}
              onPress={goToAddReview}
            />
          : (
            <Text style={style.text}>Para escribir una opinión es necesario estar logeado,
              <Text
                style={style.textClick}
                onPress={goToLogin}
              > pulsa AQUÍ para iniciar sesión
              </Text>
            </Text>
            )
      }
    </View>
  )
}
