import React from 'react'
import { View, Text } from 'react-native'
import { AirbnbRating, Input, Button } from '@rneui/base'

import { style } from './AddReviewRestaurantScreen.styles'

export function AddReviewRestaurantScreen (props) {
  const { route } = props

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
            defaultRating={0}
            size={35}
            onFinishRating={(rating) => console.log(rating)}
          />
        </View>
        <View>
          <Input placeholder='Title' />
          <Input
            placeholder='Comentario'
            multiline
            inputStyle={style.comment}
          />
        </View>
      </View>
      <Button
        title='Enviar Review'
        containerStyle={style.btnContainer}
        buttonStyle={style.btn}
      />
    </View>
  )
}
