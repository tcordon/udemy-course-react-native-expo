import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'

import { style } from './LoginForm.styles'

export function LoginForm () {
  const [showPassword, setShowPassword] = useState(false)
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
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={style.icon}
            onPressIn={() => setShowPassword(true)}
            onPressOut={() => setShowPassword(false)}
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
