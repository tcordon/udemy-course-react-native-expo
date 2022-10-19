import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth, signOut } from 'firebase/auth'

import { AccountOptions, InfoUser, LoadingModal } from '../../../components'
import { style } from './UserLoggedScreen.styles'

export function UserLoggedScreen () {
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const [reload, setReload] = useState(false)

  const logout = async () => {
    const auth = getAuth()
    await signOut(auth)
  }

  const onReload = () => setReload(!reload)

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions onReload={onReload} />
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
