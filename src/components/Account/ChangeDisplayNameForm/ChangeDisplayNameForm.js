import React from 'react'
import { View } from 'react-native'
import { Input, Button } from '@rneui/base'

import { styles } from './ChangeDisplayNameForm.styles'

export function ChangeDisplayNameForm () {
  return (
    <View style={styles.viewContent}>
      <Input
        placeholder='Nombre y Apellidos'
        rightIcon={{
          type: 'material-community',
          name: 'account-circle-outline',
          color: '#c2c2c2'
        }}
      />
      <Button
        title='Cambiar Nombre y Apellidos'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  )
}
