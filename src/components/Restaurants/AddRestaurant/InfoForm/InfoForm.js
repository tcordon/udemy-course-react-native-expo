import React from 'react'
import { View } from 'react-native'
import { Input } from '@rneui/base'

import { style } from './InfoForm.styles'

export const InfoForm = () => {
  return (
    <View style={style.content}>
      <Input
        placeholder='Nombre del Restaurante'
      />
      <Input
        placeholder='Dirección'
      />
      <Input
        placeholder='Descripción del restaurante'
        multiline
        inputContainerStyle={style.textArea}
      />
    </View>
  )
}
