import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth, signOut } from 'firebase/auth'

import { InfoUser } from '../../../components/Account'
import { style } from './UserLoggedScreen.styles'

export function UserLoggedScreen () {
  const logout = async () => {
    const auth = getAuth()
    await signOut(auth)
  }
  return (
    <View>
      <InfoUser />

      <Button
        title='Cerrar Sessión'
        buttonStyle={style.button}
        titleStyle={style.buttonTitle}
        onPress={logout}
      />
    </View>
  )
}
