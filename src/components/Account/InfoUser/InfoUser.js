import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import * as ImagePicker from 'expo-image-picker'

import { style } from './InfoUser.styles'

export function InfoUser () {
  const { uid, photoUrl, displayName, email } = getAuth().currentUser

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    })

    if (!result.cancelled) uploadImage(result.uri)
  }

  const uploadImage = (uri) => {
    console.log(uri)
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
