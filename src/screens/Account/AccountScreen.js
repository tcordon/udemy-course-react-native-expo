import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { UserGuestScreen } from './UserGuestScreen'
import { UserLoggedScreen } from './UserLoggedScreen'
import { LoadingModal } from '../../components/Shared/LoadingModal'

export const AccountScreen = () => {
  const [hasLogged, setHasLogged] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user || false)
    })
  }, [])

  if (hasLogged === null) {
    return <LoadingModal show text='Cargando...' />
  }

  return (
    hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
  )
}
