import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../data/screensData'
import { AccountScreen, LoginScreen, RegisterScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.screens.account}
        component={AccountScreen}
        options={{ title: 'Cuenta' }}
      />
      <Stack.Screen
        name={screen.account.screens.login}
        component={LoginScreen}
        options={{ title: 'Iniciar Sesión' }}
      />
      <Stack.Screen
        name={screen.account.screens.register}
        component={RegisterScreen}
        options={{ title: 'Crea tu cuenta' }}
      />
    </Stack.Navigator>
  )
}
