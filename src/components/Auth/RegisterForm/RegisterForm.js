import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'

import { style } from './RegisterForm.styles'

export function RegisterForm () {
  return (
    <View>
      <Input
        placeholder='Correo electrónico'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='at' iconStyle={style.icon} />}
      />
      <Input
        secureTextEntry
        placeholder='Contraseña'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={style.icon} />}
      />
      <Input
        secureTextEntry
        placeholder='Repetir contraseña'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={style.icon} />}
      />
      <Button title='Unirse' containerStyle={style.buttonContainer} buttonStyle={style.button} />
    </View>
  )
}
