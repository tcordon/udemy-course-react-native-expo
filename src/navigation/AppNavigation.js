import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  AccountScreen,
  FavoritesScreen,
  RankingScreen,
  RestaurantsScreen,
  SearchScreen
} from '../screens'

const Tab = createBottomTabNavigator()

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Ranking' component={RankingScreen} />
      <Tab.Screen name='Restaurant' component={RestaurantsScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
      <Tab.Screen name='Favorites' component={FavoritesScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigation
