import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { UserGuestScreen } from './UserGuestScreen'
import { UserLoggedScreen } from './UserLoggedScreen'

const AccountScreen = () => {
  const [hasLogged, setHasLogged] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user || false)
    })
  }, [])

  return (
    hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
  )
}

export default AccountScreen
