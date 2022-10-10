import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from '@rneui/base'
import { styles } from './ChangeEmailForm.styles'
import { useFormik } from 'formik'

import { initialValues, validationSchema } from './ChangeEmailForm.data'

export const ChangeEmailForm = (props) => {
  const { onClose, onReload } = props
  const [showPassword, setShowPassword] = useState(false)

  const onShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  })

  return (
    <View style={styles.content}>
      <Input
        placeholder='Nuevo Email'
        containerStyle={styles.input}
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <Input
        secureTextEntry={!showPassword}
        placeholder='Contraseña'
        containerStyle={styles.input}
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: '#c2c2c2',
          onPress: onShowPassword
        }}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title='Cambiar email'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
