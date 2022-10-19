import React from 'react'
import { View } from 'react-native'
import { Text, ListItem, Icon } from '@rneui/base'
import { map } from 'lodash'

import { style } from './Info.styles'
import { Map } from '../../Shared'

export function Info (props) {
  const { restaurant } = props

  const listInfo = [
    {
      text: restaurant.address,
      iconType: 'material-community',
      iconName: 'map-marker'
    },
    {
      text: restaurant.phone,
      iconType: 'material-community',
      iconName: 'phone'
    },
    {
      text: restaurant.email,
      iconType: 'material-community',
      iconName: 'at'
    }
  ]

  return (
    <View style={style.content}>
      <Text style={style.title}>Información Sobre el Restaurante</Text>
      <Map
        location={restaurant.location}
        name={restaurant.name}
      />
      {map(listInfo, (item, index) => (
        <ListItem
          key={index}
          bottomDivider
        >
          <Icon
            type={item.iconType}
            name={item.iconName}
            color='#00a680'
          />
          <ListItem.Content>
            <Text>{item.text}</Text>
          </ListItem.Content>
        </ListItem>
      ))}

    </View>
  )
}
