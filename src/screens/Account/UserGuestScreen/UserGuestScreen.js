import React from 'react'
import { ScrollView } from 'react-native'
import { Text, Button, Image } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

import { styles } from './UserGuestScreen.styles'
import { screen } from '../../../data/screensData'

export function UserGuestScreen () {
  const navigation = useNavigation()

  const gotoLogin = () => {
    navigation.navigate(screen.account.screens.login)
  }

  return (
    <ScrollView
      centercontent
      style={styles.content}
    >
      <Image source={require('../../../../assets/img/user-guest.png')} style={styles.image} />
      <Text style={styles.title}>Consultar texto de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Como describirias tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sido tu experiencia.
      </Text>
      <Button title='Ver tu perfil' onPress={gotoLogin} buttonStyle={styles.buttonStyle} />
    </ScrollView>

  )
}
