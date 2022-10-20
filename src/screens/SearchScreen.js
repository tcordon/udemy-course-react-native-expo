import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, SearchBar, ListItem, Avatar, Icon } from '@rneui/base'
import { query, startAt, endAt, limit, orderBy, getDocs, collection } from 'firebase/firestore'
import { size } from 'lodash'

import { Loading } from '../components/Shared'
import { db } from '../data/firebase'

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  console.log(searchResults[0].data())

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, 'restaurants'),
        orderBy('name'),
        startAt(searchText),
        endAt(`${searchText}\uf8ff`),
        limit(20)
      )
      const snapshot = await getDocs(q)
      setSearchResults(snapshot.docs)
    })()
  }, [searchText])

  return (
    <>
      <SearchBar
        placeholder='Busca tu restaurante'
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      {!searchResults && <Loading show text='Cargando...' />}
    </>
  )
}
