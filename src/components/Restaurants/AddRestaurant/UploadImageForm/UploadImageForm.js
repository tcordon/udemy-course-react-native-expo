import React from 'react'
import { View, Alert } from 'react-native'
import { Icon, Avatar, Text } from '@rneui/base'
import * as ImagePeaker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

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
      uploadImage(result.uri)
    }
  }

  const uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    const storage = getStorage()
    const storageRef = ref(storage, `restaurants/${uuid()}`)

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log(snapshot)
    })
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
