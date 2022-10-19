import React from 'react'
import { View } from 'react-native'
import { AirbnbRating, Input, Button } from '@rneui/base'
import Toast from 'react-native-toast-message'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { getAuth } from 'firebase/auth'
import { doc, setDoc, query, collection, where, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../../data/firebase'

import { style } from './AddReviewRestaurantScreen.styles'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './AddReviewRestaurantScreen.data'

export function AddReviewRestaurantScreen (props) {
  const { route } = props
  const { params } = route
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        const idDoc = uuid()
        const newData = formValue
        newData.id = idDoc
        newData.idRestaurant = params.idRestaurant
        newData.idUser = auth.currentUser.uid
        newData.avatar = auth.currentUser.photoURL
        newData.createdAt = new Date()

        await setDoc(
          doc(db, 'reviews', idDoc),
          newData
        )
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al enviar la review'
        })
        console.log(error)
      }
    }
  })

  return (
    <View style={style.content}>
      <View>
        <View style={style.ratingContent}>
          <AirbnbRating
            count={5}
            reviews={[
              'Pésimo',
              'Deficiente',
              'Normal',
              'Muy Bueno',
              'Excelente'
            ]}
            defaultRating={formik.values.rating}
            size={35}
            onFinishRating={(rating) => formik.setFieldValue('rating', rating)}
          />
        </View>
        <View>
          <Input
            placeholder='Title'
            onChangeText={(text) => formik.setFieldValue('title', text)}
            errorMessage={formik.errors.title}
          />
          <Input
            placeholder='Comentario'
            multiline
            inputStyle={style.comment}
            onChangeText={(text) => formik.setFieldValue('comment', text)}
            errorMessage={formik.errors.comment}
          />
        </View>
      </View>
      <Button
        title='Enviar Review'
        containerStyle={style.btnContainer}
        buttonStyle={style.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
