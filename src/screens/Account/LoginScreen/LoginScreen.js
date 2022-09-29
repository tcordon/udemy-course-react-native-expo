import React from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Image } from '@rneui/base'
import { LoginForm } from '../../../components/Auth'

import { style } from './LoginScreen.styles'
import { screen } from '../../../data/screensData'

export function LoginScreen () {
  const goToRegister = () => {
    navigation.navigate(screen.account.screens.register)
  }
  const navigation = useNavigation()

  return (
    <ScrollView style={style.view}>
      <Image
        source={require('../../../../assets/img/app-logo.png')}
        style={style.image}
      />
      <View style={style.content}>
        <LoginForm />
        <Text style={style.textRegister} onPress={goToRegister}>
          ¿Aún no tienes cuenta? <Text style={style.buttonRegister}>Regístrate</Text>
        </Text>
      </View>
    </ScrollView>
  )
}
