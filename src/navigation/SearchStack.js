import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { SearchScreen } from '../screens'

const Stack = createNativeStackNavigator()

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.search.screens.search}
        component={SearchScreen}
      />
    </Stack.Navigator>
  )
}

export {
  SearchStack
}
