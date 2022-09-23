import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { RestaurantsScreen } from '../screens'

const Stack = createNativeStackNavigator()

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.screens.restaurants}
        component={RestaurantsScreen}
      />
    </Stack.Navigator>
  )
}

export {
  RestaurantsStack
}
