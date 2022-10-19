import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, Button } from '@rneui/base'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

import { style } from './BtnReviewForm.styles'
import { screen } from '../../../data/screensData'

export function BtnReviewForm (props) {
  const { idRestaurant } = props
  const [hasLogged, setHasLogged] = useState(false)
  const auth = getAuth()
  const navigation = useNavigation()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user)
    })
  })

  const goToLogin = () => {
    navigation.navigate(screen.account.tab, {
      screen: screen.account.screens.login
    })
  }
  return (
    <View style={style.content}>
      {
        !hasLogged
          ? <Button title='Escribe una opinión' />
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
