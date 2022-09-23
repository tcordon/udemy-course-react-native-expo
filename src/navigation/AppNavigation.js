import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import { screen } from '../data/screensData'

import { RestaurantsStack } from '../navigation/RestaurantsStack'
import { FavoritesStack } from '../navigation/FavoritesStack'
import { RankingStack } from '../navigation/RankingStack'
import { SearchStack } from '../navigation/SearchStack'
import { AccountStack } from '../navigation/AccountStack'

const Tab = createBottomTabNavigator()
const tabBarIconOptions = (routeName, focused, color, size) => {
  const iconName = {
    focused: {
      Default: 'home'
    },
    nonFocused: {
      Default: 'home-outline'
    }
  }

  iconName.focused[screen.restaurant.tab] = 'compass'
  iconName.nonFocused[screen.restaurant.tab] = 'compass-outline'
  iconName.focused[screen.favorites.tab] = 'heart'
  iconName.nonFocused[screen.favorites.tab] = 'heart-outline'
  iconName.focused[screen.search.tab] = 'feature-search'
  iconName.nonFocused[screen.search.tab] = 'feature-search-outline'
  iconName.focused[screen.ranking.tab] = 'star'
  iconName.nonFocused[screen.ranking.tab] = 'star-outline'
  iconName.focused[screen.account.tab] = 'account'
  iconName.nonFocused[screen.account.tab] = 'account-outline'

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
        headerShown: false,
        tabBarActiveTintColor: '#0000FF',
        tabBarInactiveTintColor: '#646464',
        tabBarIcon: ({ focused, color, size }) => tabBarIconOptions(routeName, focused, color, size)
      }
    )}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantsStack}
        options={{ title: 'Restaurante' }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: 'FAvoritos' }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: 'Ranking' }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: 'Buscar' }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: 'Cuenta' }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigation
