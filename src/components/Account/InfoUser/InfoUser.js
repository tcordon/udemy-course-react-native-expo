import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '@rneui/base'
import { getAuth, updateProfile } from 'firebase/auth'
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { style } from './InfoUser.styles'

export function InfoUser ({ setLoading, setLoadingText }) {
  const { uid, photoURL, displayName, email } = getAuth().currentUser
  const [avatar, setAvatar] = useState(photoURL)

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    })

    if (!result.cancelled) uploadImage(result.uri)
  }

  const uploadImage = async (uri) => {
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

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage()
    const imageRef = ref(storage, imagePath)
    const imageUrl = await getDownloadURL(imageRef)

    const auth = getAuth()
    updateProfile(auth.currentUser, { photoURL: imageUrl })

    setAvatar(imageUrl)
    setLoading(false)
  }

  return (
    <View style={style.content}>
      <Avatar
        size='large'
        rounded
        containerStyle={style.avatar}
        icon={{ type: 'material', name: 'person' }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={style.displayName}>{displayName || 'Anonimo'}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}
