import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import OpenMap, { createOpenLink } from 'react-native-open-maps'

import { style } from './Map.styles'

export function Map (props) {
  const { location, name } = props
  const openAppMap = createOpenLink(
    {
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
      query: name
    }
  )

  return (
    <MapView
      initialRegion={location}
      style={style.content}
      onPress={openAppMap}
      zoom={19}
    >
      <Marker coordinate={location} />
    </MapView>
  )
}
