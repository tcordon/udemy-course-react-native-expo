import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import { doc, getDocs, query, where, collection, deleteDoc, setDoc } from 'firebase/firestore'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { style } from './BtnFavorite.styles'
import { db } from '../../../data/firebase'

export function BtnFavorite (props) {
  const { idRestaurant } = props
  const auth = getAuth()

  const addFavorite = async () => {
    try {
      // generat uuid for favorite
      const idFavorite = uuid()

      // Build document
      const data = {
        id: idFavorite,
        idRestaurant,
        idUser: auth.currentUser.uid
      }

      // Store document
      await setDoc(
        doc(db, 'favorites', idFavorite),
        data
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={style.content}>
      <Icon
        type='material-community'
        name='heart-outline'
        color='#c2c2c2'
        size={35}
        onPress={addFavorite}
      />
    </View>
  )
}
