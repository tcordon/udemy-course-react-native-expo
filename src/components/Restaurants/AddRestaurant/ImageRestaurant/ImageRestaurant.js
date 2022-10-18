import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'

import { style } from './ImageRestaurant.styles'

export function ImageRestaurant (props) {
  const { formik } = props

  const principalImage = formik.values.images[0]

  return (
    <View style={style.content}>
      <Image
        source={
          principalImage
            ? { uri: principalImage }
            : require('../../../../../assets/img/no-image-available.jpg')
        }
        style={style.image}
      />
    </View>
  )
}
