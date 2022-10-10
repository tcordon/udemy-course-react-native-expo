import React from 'react'
import { View } from 'react-native'
import { Input, Button } from '@rneui/base'
import { useFormik } from 'formik'
import { getAuth, updateProfile } from 'firebase/auth'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { styles } from './ChangeDisplayNameForm.styles'
import { initialValues, validationSchema } from './ChangeDisplayNameForm.data'

export function ChangeDisplayNameForm (props) {
  const { onClose } = props
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const {displayName} = formValue
        const currentUser = getAuth().currentUser
        await updateProfile(currentUser, { displayName })

        onClose()
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al cambiar el nombre y apellidos'
        })
      }
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
