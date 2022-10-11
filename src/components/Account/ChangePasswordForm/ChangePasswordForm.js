import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from '@rneui/base'
import { useFormik } from 'formik'

import { styles } from './ChangePasswordForm.styles'
import { initialValues, validationSchema } from './ChangePasswordForm.data'

export function ChangePasswordForm (props) {
  const { onClose, onReload } = props
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)

      onReload()
      onClose()
    }
  })

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
        onChangeText={(text) => formik.setFieldValue('actualPassword', text)}
        errorMessage={formik.errors.actualPassword}
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
        onChangeText={(text) => formik.setFieldValue('newPassword', text)}
        errorMessage={formik.errors.newPassword}
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
        onChangeText={(text) => formik.setFieldValue('reNewPassword', text)}
        errorMessage={formik.errors.reNewPassword}
      />
      <Button
        title='Cambiar Contraseña'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
