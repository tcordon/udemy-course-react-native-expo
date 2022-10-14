import React from 'react'
import { View } from 'react-native'
import { Input } from '@rneui/base'

import { style } from './InfoForm.styles'

export const InfoForm = (props) => {
  const { formik } = props

  return (
    <View style={style.content}>
      <Input
        placeholder='Nombre del Restaurante'
        onChangeText={(text) => formik.setFieldValue('name', text)}
        errorMessage={formik.errors.name}
      />
      <Input
        placeholder='Dirección'
        onChangeText={(text) => formik.setFieldValue('address', text)}
        errorMessage={formik.errors.address}
      />
      <Input
        placeholder='Teléfono'
        onChangeText={(text) => formik.setFieldValue('phone', text)}
        errorMessage={formik.errors.phone}
      />
      <Input
        placeholder='eMail'
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder='Descripción del restaurante'
        multiline
        inputContainerStyle={style.textArea}
        onChangeText={(text) => formik.setFieldValue('description', text)}
        errorMessage={formik.errors.description}
      />
    </View>
  )
}
