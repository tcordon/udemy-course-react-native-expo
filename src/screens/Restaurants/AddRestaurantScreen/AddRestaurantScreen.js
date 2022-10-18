import React from 'react'
import { ScrollView } from 'react-native'
import { Button } from '@rneui/base'
import { useFormik } from 'formik'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'

import { InfoForm, UploadImageForm, ImageRestaurant } from '../../../components/Restaurants'
import { style } from './AddRestaurantScreen.styles'
import { initialValues, validationSchema } from './AddRestaurantScreen.data'
import { db } from '../../../data/firebase'

export function AddRestaurantScreen () {
  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue
        newData.id = uuid()
        newData.createdAt = new Date()

        await setDoc(
          doc(db, 'restaurants', newData.id),
          newData
        )

        navigation.goBack()
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <ScrollView>
      <ImageRestaurant formik={formik} />
      <InfoForm formik={formik} />
      <UploadImageForm formik={formik} />
      <Button
        title='Crear Restaurante'
        buttonStyle={style.btnAddRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  )
}
