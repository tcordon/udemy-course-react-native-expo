import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as Location from 'expo-location'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { style } from './MapForm.styles'
import { Modal } from '../../../Shared'

export function MapForm (props) {
  const { show, close } = props
  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
  })

  useEffect(() => {
    (
      async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          Toast.show({
            type: 'info',
            position: 'bottom',
            text1: ' Tienes que ir a a justes de la app y activar la localización'
          })
          return
        }

        const locationTemp = await Location.getCurrentPositionAsync()
        setLocation({
          latitude: locationTemp.latitude,
          longitude: locationTemp.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        })
      }
    )()
  }, [])

  return (
    <Modal show={show} close={close}>
      <Text>MapForm</Text>
    </Modal>
  )
}
