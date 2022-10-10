import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from '@rneui/base'
import { styles } from './ChangeEmailForm.styles'
import { Formik } from 'formik'

export const ChangeEmailForm = () => {
  const [showPassword, setShowPasword] = useState(false)

  const onShowPassword = () => {
    setShowPasword((prevState) => !prevState)
  }

  return (
    <View style={styles.content}>
      <Input
        placeholder='Nuevo Email'
        containerStyle={styles.input}
      />
      <Input
        secureTextEntry={!showPassword}
        placeholder='Contraseña'
        errorMessage=''
        containerStyle={styles.input}
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: '#c2c2c2',
          onPress: onShowPassword
        }}
      />
      <Button
        title='Cambiar email'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => console.log('submit form')}
        loading=''
      />
    </View>
  )
}
