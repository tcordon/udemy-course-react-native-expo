import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { RestaurantsScreen, AddRestaurantScreen } from '../screens'

const Stack = createNativeStackNavigator()

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.screens.restaurants}
        component={RestaurantsScreen}
      />
      <Stack.Screen
        name={screen.restaurant.screens.addRestaurant}
        component={AddRestaurantScreen}
      />
    </Stack.Navigator>
  )
}

export {
  RestaurantsStack
}
