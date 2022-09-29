import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'

import { style } from './LoginForm.styles'

export function LoginForm () {
  return (
    <View style={style.contenedor}>
      <Input
        placeholder='Correo electrónico'
        containerStyle={style.input}
        rightIcon={
          <Icon
            type='material-community'
            name='at'
            iconStyle={style.icon}
          />
        }
      />
      <Input
        placeholder='Contraseña'
        containerStyle={style.input}
        secureTextEntry
        rightIcon={
          <Icon
            type='material-community'
            name='eye-outline'
            iconStyle={style.icon}
          />
        }
      />
      <Button
        title='Iniciar Sessión'
        containerStyle={style.buttonContainer}
        buttonStyle={style.button}
      />
    </View>
  )
}
