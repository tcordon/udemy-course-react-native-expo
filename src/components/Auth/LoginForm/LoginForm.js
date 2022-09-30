import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'
import { useFormik } from 'formik'

import { style } from './LoginForm.styles'
import { initialValues, validationSchema } from './LoginForm.data'

export function LoginForm () {
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false
  })
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
        onChangeText={text => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
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
        onChangeText={text => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title='Iniciar Sessión'
        containerStyle={style.buttonContainer}
        buttonStyle={style.button}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
