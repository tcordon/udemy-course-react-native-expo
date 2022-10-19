import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { RestaurantsScreen, AddRestaurantScreen, RestaurantScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.screens.restaurants}
        component={RestaurantsScreen}
        options={{ title: 'Restaurantes' }}
      />
      <Stack.Screen
        name={screen.restaurant.screens.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: 'Nuevo Restaurante' }}
      />
      <Stack.Screen
        name={screen.restaurant.screens.restaurant}
        component={RestaurantScreen}
        options={{ title: 'Restaurante' }}
      />
    </Stack.Navigator>
  )
}
