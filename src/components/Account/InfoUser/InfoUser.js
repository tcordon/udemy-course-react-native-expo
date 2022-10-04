import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

import { style } from './InfoUser.styles'

export function InfoUser ({ setLoading, setLoadingText }) {
  const { uid, photoUrl, displayName, email } = getAuth().currentUser

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    })

    if (!result.cancelled) uploadImage(result.uri)
  }

  const uploadImage = async (uri) => {
    console.log('Uploading image...')
    setLoading(true)
    setLoadingText('Actualizando Avatar..')

    const response = await fetch(uri)
    const blob = await response.blob()

    const storage = getStorage()
    const sotrageRef = ref(storage, `avatar/${uid}`)

    uploadBytes(sotrageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath)
    })
  }

  const updatePhotoUrl = (imagePath) => {
    setLoading(false)
    console.log(imagePath)
  }

  return (
    <View style={style.content}>
      <Avatar
        size='large'
        rounded
        icon={{ type: 'material', name: 'person' }}
        containerStyle={style.avatar}
        source={{ uri: photoUrl }}
      >
        <Text />
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={style.displayName}>{displayName || 'Anonimo'}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}
