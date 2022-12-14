import React, { useState } from 'react'
import { ScrollView, Alert } from 'react-native'
import { Icon, Avatar, Text } from '@rneui/base'
import * as ImagePeaker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { map, filter } from 'lodash'

import { style } from './UploadImageForm.styles'
import { LoadingModal } from '../../../Shared'

export function UploadImageForm (props) {
  const { formik } = props
  const [isLoading, setIsLoading] = useState(false)

  const openGallery = async () => {
    const result = await ImagePeaker.launchImageLibraryAsync({
      mediaTypes: ImagePeaker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setIsLoading(true)
      uploadImage(result.uri)
    }
  }

  const uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    const storage = getStorage()
    const storageRef = ref(storage, `restaurants/${uuid()}`)

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotosRestaurant(snapshot.metadata.fullPath)
    })
  }

  const updatePhotosRestaurant = async (imagePath) => {
    const storage = getStorage()
    const imageRef = ref(storage, imagePath)

    const imageUrl = await getDownloadURL(imageRef)

    formik.setFieldValue('images', [...formik.values.images, imageUrl])

    setIsLoading(false)
  }

  const removeImage = (img) => {
    Alert.alert('Eliminar Image', '¿Estás seguro de eliminar esta imagen?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          onPress: () => {
            const result = filter(formik.values.images, (image) => image !== img)
            formik.setFieldValue('images', result)
          }
        }
      ]
    )
  }

  return (
    <>
      <ScrollView
        style={style.viewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type='material-community'
          name='camera'
          color='#a7a7a7'
          containerStyle={style.iconContainer}
          onPress={openGallery}
        />
        {map(formik.values.images, (image) => (
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={style.imageContainer}
            onPress={() => removeImage(image)}
          />
        ))}
      </ScrollView>
      <Text style={style.error}>{formik.errors.image}</Text>
      <LoadingModal show={isLoading} text='Subiendo imagen...' />
    </>
  )
}
