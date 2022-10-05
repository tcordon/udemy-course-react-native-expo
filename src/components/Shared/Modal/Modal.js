import React from 'react'
import { Overlay } from '@rneui/base'

import { style } from './Modal.styles'

export function Modal (props) {
  const { show, close, children } = props
  return (
    <Overlay
      isVisible={show}
      overlayStyle={style.overlay}
      onBackdropPress={close}
    >
      {children}
    </Overlay>
  )
}
