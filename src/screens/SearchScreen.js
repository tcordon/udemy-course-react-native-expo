import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, SearchBar, ListItem, Avatar, Icon } from '@rneui/base'
import { query, startAt, endAt, limit, orderBy, getDocs, collection } from 'firebase/firestore'
import { size, map } from 'lodash'

import { Loading } from '../components/Shared'
import { db } from '../data/firebase'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../data/screensData'

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const navigation = useNavigation()

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

  const goToRestaurant = (idRestaurant) => {
    navigation.navigate(
      screen.restaurant.tab,
      {
        screen: screen.restaurant.screens.restaurant,
        params: {
          id: idRestaurant
        }
      }
    )
  }

  return (
    <>
      <SearchBar
        placeholder='Busca tu restaurante'
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      {!searchResults && <Loading show text='Cargando...' />}
      <ScrollView>
        {
          size(searchResults) === 0
            ? (
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text>No se han encontrado resultados</Text>
              </View>
              )
            : (
                map(searchResults, (item) => {
                  const data = item.data()
                  return (
                    <ListItem
                      key={data.id}
                      bottomDivider
                      onPress={() => goToRestaurant(data.id)}
                    >
                      <Avatar
                        source={{ uri: data.images[0] }}
                        rounded
                      />
                      <ListItem.Content>
                        <ListItem.Title>{data.name}</ListItem.Title>
                      </ListItem.Content>
                      <Icon
                        type='material-community'
                        name='chevron-right'
                      />
                    </ListItem>
                  )
                })
              )
        }
      </ScrollView>
    </>
  )
}
