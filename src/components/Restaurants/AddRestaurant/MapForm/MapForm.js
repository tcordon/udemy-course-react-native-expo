import React, { useEffect, useState } from 'react'
import { View  } from 'react-native'
import * as DeviceLocation from 'expo-location'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MapView from 'react-native-maps'

import { style } from './MapForm.styles'
import { Modal } from '../../../Shared'

export function MapForm (props) {
  const { show, close } = props
  const [location, setLocation] = useState({
    latitude: 0.01,
    longitude: 0.01,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })

  useEffect(() => {
    (
      async () => {
        const { status } = await DeviceLocation.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          Toast.show({
            type: 'info',
            position: 'bottom',
            text1: ' Tienes que ir a a justes de la app y activar la localización'
          })
          return
        }

        const locationTemp = await DeviceLocation.getCurrentPositionAsync()
        setLocation({
          latitude: locationTemp.coords.latitude,
          longitude: locationTemp.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        })
      }
    )()
  }, [])

  return (
    <Modal show={show} close={close}>
      <View>
        <MapView
          initialRegion={location}
          showsUserLocation
          style={style.mapStyle}
          onRegionChange={(locationTemp) => setLocation(locationTemp)}
        >
          <MapView.Marker
            draggable
            coordinate={location}
          />
        </MapView>
      </View>
    </Modal>
  )
}
