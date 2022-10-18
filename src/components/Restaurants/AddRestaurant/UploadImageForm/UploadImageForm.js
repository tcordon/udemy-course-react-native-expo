import React from 'react'
import { View, Alert } from 'react-native'
import { Icon, Avatar, Text } from '@rneui/base'
import * as ImagePeaker from 'expo-image-picker'

import { style } from './UploadImage.Form.styles'

export function UploadImageForm (props) {
  const { formik } = props

  const openGallery = async () => {
    const result = await ImagePeaker.launchImageLibraryAsync({
      mediaTypes: ImagePeaker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      console.log('upload image')
    }
  }

  return (
    <>
      <View style={style.viewImage}>
        <Icon
          type='material-community'
          name='camera'
          color='#a7a7a7'
          containerStyle={style.iconContainer}
          onPress={openGallery}
        />
      </View>
    </>
  )
}
