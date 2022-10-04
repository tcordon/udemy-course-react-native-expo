import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth, signOut } from 'firebase/auth'

import { AccountOptions, InfoUser } from '../../../components/Account'
import { style } from './UserLoggedScreen.styles'
import { LoadingModal } from '../../../components'

export function UserLoggedScreen () {
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')

  const logout = async () => {
    const auth = getAuth()
    await signOut(auth)
  }
  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions />
      <Button
        title='Cerrar Sessión'
        buttonStyle={style.button}
        titleStyle={style.buttonTitle}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} />
    </View>
  )
}
