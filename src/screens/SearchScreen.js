import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, SearchBar, ListItem, Avatar, Icon } from '@rneui/base'
import { Loading } from '../components/Shared'

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState(null)

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
