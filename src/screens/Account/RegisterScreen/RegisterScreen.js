import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { RegisterForm } from '../../../components/Auth'

import { style } from './RegisterScreen.styles'

export function RegisterScreen () {
  return (
    <KeyboardAwareScrollView style={style.view}>
      <Image source={require('../../../../assets/img/app-logo.png')} style={style.image} />
      <View style={style.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}
