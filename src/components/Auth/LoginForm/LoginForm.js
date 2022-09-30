import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'
import { useFormik } from 'formik'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

import { screen } from '../../../data/screensData'
import { style } from './LoginForm.styles'
import { initialValues, validationSchema } from './LoginForm.data'

export function LoginForm () {
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        )
        navigation.navigate(screen.account.screens.account)
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Usuario o contraseña incorrectos'
        })
      }
    }
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
