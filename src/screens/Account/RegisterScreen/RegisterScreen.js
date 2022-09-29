import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import { RegisterForm } from '../../../components/Auth'

import { style } from './RegisterScreen.styles'

export function RegisterScreen () {
  return (
    <View style={style.view}>
      <Image source={require('../../../../assets/img/app-logo.png')} style={style.image} />
      <View style={style.content}>
        <RegisterForm />
      </View>
    </View>
  )
}
