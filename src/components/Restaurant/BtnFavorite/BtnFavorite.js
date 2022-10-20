import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import { doc, getDocs, query, where, collection, deleteDoc, setDoc } from 'firebase/firestore'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { size } from 'lodash'

import { style } from './BtnFavorite.styles'
import { db } from '../../../data/firebase'

export function BtnFavorite (props) {
  const { idRestaurant } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [isReload, setIsReload] = useState(false)
  const auth = getAuth()

  useEffect(() => {
    (async () => {
      const response = await getFavorites()
      if (size(response)) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
    })()
  }, [idRestaurant, isReload])

  const onReload = () => setIsReload((prevState) => !prevState)

  const getFavorites = async () => {
    const q = query(
      collection(db, 'favorites'),
      where('idRestaurant', '==', idRestaurant),
      where('idUser', '==', auth.currentUser.uid)
    )
    const result = await getDocs(q)
    return result.docs
  }

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
      onReload()
    } catch (error) {
      console.log(error)
    }
  }

  const removeFavorite = () => {
    console.log('delete de favoritos')
  }

  return (
    <View style={style.content}>
      {
        isFavorite !== undefined &&
          <Icon
            type='material-community'
            name={isFavorite ? 'heart' : 'heart-outline'}
            color={isFavorite ? '#ff0000' : '#c2c2c2'}
            size={35}
            onPress={isFavorite ? removeFavorite : addFavorite}
          />
      }
    </View>
  )
}
