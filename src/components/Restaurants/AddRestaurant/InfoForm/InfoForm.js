import React, { useState } from 'react'
import { View } from 'react-native'
import { Input } from '@rneui/base'
import { MapForm } from '../MapForm'

import { style } from './InfoForm.styles'

export const InfoForm = (props) => {
  const { formik } = props
  const [showMap, setShowMap] = useState(false)

  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState)
  }

  return (
    <>
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
          rightIcon={{
            type: 'material-community',
            name: 'map-marker-radius',
            color: '#c2c2c2',
            onPress: onOpenCloseMap
          }}
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

      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  )
}
