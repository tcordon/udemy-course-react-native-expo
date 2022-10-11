import React, { useState} from 'react'
import { View } from 'react-native'
import { Input, Button } from '@rneui/base'

import { styles } from './ChangePasswordForm.styles'

export function ChangePasswordForm () {
  const [showPassword, setShowPassword] = useState(false)

  const onShowPassword = () => setShowPassword((prevState) => !prevState)
  return (
    <View style={styles.content}>
      <Input
        secureTextEntry={!showPassword}
        placeholder='Contraseña Actual'
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: '#c2c2c2',
          onPress: onShowPassword
        }}
        style={styles.input}
      />
      <Input
        secureTextEntry={!showPassword}
        placeholder='Nueva Contraseña'
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: '#c2c2c2',
          onPress: onShowPassword
        }}
        style={styles.input}
      />
      <Input
        secureTextEntry={!showPassword}
        placeholder='Repetir Contraseña'
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: '#c2c2c2',
          onPress: onShowPassword
        }}
        style={styles.input}
      />
      <Button
        title='Cambiar Contraseña'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  )
}
