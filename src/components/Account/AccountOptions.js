import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from '@rneui/base'

import { Modal } from '../Shared'
import { ChangeDisplayNameForm } from './ChangeDisplayNameForm'
import { ChangeEmailForm } from './ChangeEmailForm'
import { ChangePasswordForm } from './ChangePasswordForm'

export function AccountOptions (props) {
  const { onReload } = props

  const [showModal, setShowModal] = useState(false)
  const [renderModal, setRenderModal] = useState(null)

  const onCloseOpenModal = () => setShowModal((prevState) => !prevState)

  const selectedComponent = (key) => {
    const componentOptions = {
      displayName: {
        msg: <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />
      },
      email: {
        msg: <ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />
      },
      password: {
        msg: <ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload} />
      }
    }
    setRenderModal(componentOptions[key].msg)
    onCloseOpenModal()
  }

  const menuOptions = getMenuOptions(selectedComponent)

  return (
    <View>
      {
        menuOptions.map((menu, index) => {
          return (
            <ListItem
              key={index}
              bottomDivider
              onPress={menu.handleOnPress}
            >
              <Icon
                type={menu.iconType}
                name={menu.iconNameLeft}
                color={menu.iconColorLeft}
              />
              <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
              </ListItem.Content>
              <Icon
                type={menu.iconType}
                name={menu.iconNameRigth}
                color={menu.iconColorRigth}
              />
            </ListItem>
          )
        })
      }
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderModal}
      </Modal>
    </View>
  )
}

function getMenuOptions (selectedComponent) {
  return [
    {
      title: 'Cambiar Nombre y Apellidos',
      iconType: 'material-community',
      iconNameLeft: 'account-circle',
      iconNameRigth: 'chevron-right',
      iconColorLeft: '#ccc',
      iconColorRigth: '#ccc',
      handleOnPress: () => selectedComponent('displayName')
    },
    {
      title: 'Cambiar email',
      iconType: 'material-community',
      iconNameLeft: 'at',
      iconNameRigth: 'chevron-right',
      iconColorLeft: '#ccc',
      iconColorRigth: '#ccc',
      handleOnPress: () => selectedComponent('email')
    },
    {
      title: 'Cambiar contraseña',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconNameRigth: 'chevron-right',
      iconColorLeft: '#ccc',
      iconColorRigth: '#ccc',
      handleOnPress: () => selectedComponent('password')
    }
  ]
}
