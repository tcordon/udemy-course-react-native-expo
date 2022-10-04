import React from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from '@rneui/base'

export function AccountOptions () {
  const menuOptions = getMenuOptions()
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
    </View>
  )
}

function getMenuOptions () {
  return [
    {
      title: 'Cambiar Nombre y Apellidos',
      iconType: 'material-community',
      iconNameLeft: 'account-circle',
      iconNameRigth: 'chevron-right',
      iconColorLeft: '#ccc',
      iconColorRigth: '#ccc',
      handleOnPress: () => console.log('cambiar nombre y apellidos')
    },
    {
      title: 'Cambiar email',
      iconType: 'material-community',
      iconNameLeft: 'at',
      iconNameRigth: 'chevron-right',
      iconColorLeft: '#ccc',
      iconColorRigth: '#ccc',
      handleOnPress: () => console.log('cambiar email')
    },
    {
      title: 'Cambiar contraseña',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconNameRigth: 'chevron-right',
      iconColorLeft: '#ccc',
      iconColorRigth: '#ccc',
      handleOnPress: () => console.log('cambiar contraseña')
    }
  ]
}
