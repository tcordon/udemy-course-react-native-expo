import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { AccountScreen } from '../screens'

const Stack = createNativeStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.screens.account}
        component={AccountScreen}
      />
    </Stack.Navigator>
  )
}

export {
  AccountStack
}
