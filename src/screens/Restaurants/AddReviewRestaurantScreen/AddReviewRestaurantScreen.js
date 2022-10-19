import React from 'react'
import { View } from 'react-native'
import { AirbnbRating, Input, Button } from '@rneui/base'
import Toast from 'react-native-toast-message'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { getAuth } from 'firebase/auth'
import { doc, setDoc, query, collection, where, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../../data/firebase'
import { map, mean } from 'lodash'

import { style } from './AddReviewRestaurantScreen.styles'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './AddReviewRestaurantScreen.data'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../data/screensData'

export function AddReviewRestaurantScreen (props) {
  const { route } = props
  const { params } = route
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        // Create new review
        const auth = getAuth()
        const idDoc = uuid()
        const newData = formValue
        newData.id = idDoc
        newData.idRestaurant = params.idRestaurant
        newData.idUser = auth.currentUser.uid
        newData.avatar = auth.currentUser.photoURL
        newData.createdAt = new Date()

        // Save review
        await setDoc(
          doc(db, 'reviews', idDoc),
          newData
        )
        // Update Restaurant Data
        await updateRestaurante()
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al enviar la review'
        })
      }
    }
  })

  const updateRestaurante = async (idRestaurant) => {
    // Get Restaurant reviews
    const q = query(
      collection(db, 'reviews'),
      where('idRestaurant', '==', params.idRestaurant)
    )

    onSnapshot(q, async (snapshot) => {
      // Got all reviews
      const reviews = snapshot.docs

      // Get all review ratings
      const arrayStars = map(reviews, (review) => review.data().rating)

      // Calculate restaurant rating mean
      const media = mean(arrayStars)

      // Find restaurant by id
      const restaurantRef = doc(db, 'restaurants', params.idRestaurant)

      // Update found restaurand document with new data (ratingMedia key)
      await updateDoc(
        restaurantRef,
        {
          ratingMedia: media
        }
      )

      navigation.navigate(screen.restaurant.screens.restaurant, { id: params.idRestaurant })
    })
  }

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
