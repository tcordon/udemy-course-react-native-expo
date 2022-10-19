import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { style } from './Map.styles'

export function Map (props) {
  const { location, name } = props
  return (
    <MapView
      initialRegion={location}
      style={style.content}
    >
      <Marker coordinate={location} />
    </MapView>
  )
}
