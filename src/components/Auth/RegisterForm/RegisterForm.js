import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'
import { useFormik } from 'formik'

import { style } from './RegisterForm.styles'
import { initialValues, validationSchema } from './RegisterForm.data'

export function RegisterForm () {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log('Form Enviado')
      console.log(formValue)
    }
  })
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
        secureTextEntry
        placeholder='Contraseña'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={style.icon} />}
        onChangeText={text => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Input
        secureTextEntry
        placeholder='Repetir contraseña'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={style.icon} />}
        onChangeText={text => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title='Unirse'
        containerStyle={style.buttonContainer}
        buttonStyle={style.button}
        onPress={formik.handleSubmit}
      />
    </View>
  )
}
