import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Overlay, Text } from '@rneui/base'

import { styles } from './LoadingModal.styles'

export function LoadingModal ({ show, text }) {
  return (
    <Overlay
      isVisible={show}
      windowBackgroundColor='rgba(0,0,0,0.5)'
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size='large' color='#00A680' />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  )
}

LoadingModal.defaultProps = {
  show: false
}
