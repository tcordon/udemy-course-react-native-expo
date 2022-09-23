import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { FavoritesScreen } from '../screens'

const Stack = createNativeStackNavigator()

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.screens.favourites}
        component={FavoritesScreen}
      />
    </Stack.Navigator>
  )
}

export {
  FavoritesStack
}
