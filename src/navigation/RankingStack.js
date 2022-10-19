import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { RankingScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const RankingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.ranking.screens.ranking}
        component={RankingScreen}
      />
    </Stack.Navigator>
  )
}
