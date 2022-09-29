import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'
import { useFormik } from 'formik'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import { screen } from '../../../data/screensData'
import { style } from './RegisterForm.styles'
import { initialValues, validationSchema } from './RegisterForm.data'

export function RegisterForm () {
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        )
        navigation.navigate(screen.account.screens.account)
      } catch (error) {
        console.log(error)
        Toast.show({
          type: 'error',
          position: 'bottom',
          text: 'Error al registrarse, intentelo más tarde.'
        })
      }
    }
  })

  const showHidePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <View style={style.content}>
      <Input
        placeholder='Correo electrónico'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='at' iconStyle={style.icon} />}
        onChangeText={text => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <Input
        secureTextEntry={!showPassword}
        placeholder='Contraseña'
        containerStyle={style.input}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={style.icon}
            onPress={showHidePassword}
          />
        }
        onChangeText={text => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Input
        secureTextEntry={!showPassword}
        placeholder='Repetir contraseña'
        containerStyle={style.input}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={style.icon}
            onPress={showHidePassword}
          />
        }
        onChangeText={text => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title='Unirse'
        containerStyle={style.buttonContainer}
        buttonStyle={style.button}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
