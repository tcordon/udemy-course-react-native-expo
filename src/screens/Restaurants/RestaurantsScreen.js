import { View, Text, Button } from 'react-native'

import { screen } from '../../data/screensData'

const RestaurantsScreen = ({ navigation }) => {
  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.screens.addRestaurant)
  }

  return (
    <View>
      <Text>Estamos en la screen Restaurnats</Text>
      <Button title='Crear Restaurante' onPress={goToAddRestaurant} />
    </View>
  )
}

export default RestaurantsScreen
