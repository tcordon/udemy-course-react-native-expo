import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'

import {
  AccountScreen,
  FavoritesScreen,
  RankingScreen,
  RestaurantsScreen,
  SearchScreen
} from '../screens'

const Tab = createBottomTabNavigator()
const tabBarIconOptions = (routeName, focused, color, size) => {
  const iconName = {
    focused: {
      Restaurant: 'compass',
      Favorites: 'heart',
      Search: 'feature-search',
      Ranking: 'star',
      Account: 'account',
      Default: 'home'
    },
    nonFocused: {
      Restaurant: 'compass-outline',
      Favorites: 'heart-outline',
      Search: 'feature-search-outline',
      Ranking: 'star-outline',
      Account: 'account-outline',
      Default: 'home-outline'
    }
  }

  const isFocused = focused ? 'focused' : 'nonFocused'
  const name = iconName[isFocused][routeName || 'Default']
  return (
    <Icon
      type='material-community'
      name={name}
      color={color}
      size={size}
    />
  )
}

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route: { name: routeName } }) => (
      {
        tabBarActiveTintColor: '#0000FF',
        tabBarInactiveTintColor: '#646464',
        tabBarIcon: ({ focused, color, size }) => tabBarIconOptions(routeName, focused, color, size)
      }
    )}
    >
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Ranking' component={RankingScreen} />
      <Tab.Screen name='Restaurant' component={RestaurantsScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
      <Tab.Screen name='Favorites' component={FavoritesScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigation
