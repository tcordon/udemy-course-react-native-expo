import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/base'
import { useFormik } from 'formik'

import { style } from './RegisterForm.styles'
import { initialValues } from './RegisterForm.data'

export function RegisterForm () {
  const formik = useFormik({
    initialValues: initialValues(),
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
      />
      <Input
        secureTextEntry
        placeholder='Contraseña'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={style.icon} />}
        onChangeText={text => formik.setFieldValue('password', text)}
      />
      <Input
        secureTextEntry
        placeholder='Repetir contraseña'
        containerStyle={style.input}
        rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={style.icon} />}
        onChangeText={text => formik.setFieldValue('repeatPassword', text)}
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
