import React from 'react'
import { View, Text } from 'react-native'
import { InfoUser } from '../../../components/Account'
import { style } from '../../../components/Auth/LoginForm/LoginForm.styles'

export function UserLoggedScreen () {
  return (
    <View>
      <InfoUser />
    </View>
  )
}
