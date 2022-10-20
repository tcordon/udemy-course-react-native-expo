import React from 'react'
import { View } from 'react-native'
import { Text, Icon, Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

import { style } from './UserNotLogged.styles'
import { screen } from '../../../data/screensData'

export function UserNotLogged () {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate(
      screen.account.tab,
      screen.account.screens.login
    )
  }

  return (
    <View style={style.content}>
      <Icon
        type='material-community'
        name='alert-outline'
        size={80}
      />
      <Text style={style.text}>
        Necesitas estar logeado para ver esta sección
      </Text>
      <Button
        title='Ir al Login'
        containerStyle={style.btnContainer}
        buttonStyle={style.btn}
        onPress={goToLogin}
      />
    </View>
  )
}
