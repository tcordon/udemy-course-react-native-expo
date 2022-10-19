import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { SearchScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.search.screens.search}
        component={SearchScreen}
      />
    </Stack.Navigator>
  )
}
