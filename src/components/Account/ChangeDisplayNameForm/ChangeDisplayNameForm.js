import React from 'react'
import { View } from 'react-native'
import { Input, Button } from '@rneui/base'
import { useFormik } from 'formik'

import { styles } from './ChangeDisplayNameForm.styles'
import { initialValues, validationSchema } from './ChangeDisplayNameForm.data'

export function ChangeDisplayNameForm () {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue)
    }
  })

  return (
    <View style={styles.viewContent}>
      <Input
        placeholder='Nombre y Apellidos'
        rightIcon={{
          type: 'material-community',
          name: 'account-circle-outline',
          color: '#c2c2c2'
        }}
        onChangeText={(text) => formik.setFieldValue('displayName', text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title='Cambiar Nombre y Apellidos'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
