import React from 'react'
import { View } from 'react-native'
import { AirbnbRating, Input, Button } from '@rneui/base'

import { style } from './AddReviewRestaurantScreen.styles'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './AddReviewRestaurantScreen.data'

export function AddReviewRestaurantScreen (props) {
  const { route } = props
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
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
