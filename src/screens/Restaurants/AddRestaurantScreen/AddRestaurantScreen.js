import React from 'react'
import { View } from 'react-native'
import { Button } from '@rneui/base'
import { useFormik } from 'formik'

import { InfoForm, UploadImageForm } from '../../../components/Restaurants'
import { style } from './AddRestaurantScreen.styles'
import { initialValues, validationSchema } from './AddRestaurantScreen.data'

export function AddRestaurantScreen () {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  })

  return (
    <View>
      <InfoForm formik={formik} />
      <UploadImageForm formik={formik} />
      <Button
        title='Crear Restaurante'
        buttonStyle={style.btnAddRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
