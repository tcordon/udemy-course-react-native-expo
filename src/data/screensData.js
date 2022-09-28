const restaurantStack = {
  tab: 'RestaurantTab',
  icon: {
    focused: 'compass',
    nonFocused: 'compass-outline'
  },
  screens: {
    restaurants: 'Restaurantes',
    addRestaurant: 'Añadir Restaurante'
  }
}

const favoritesStack = {
  tab: 'FavoritesTab',
  screens: {
    favourites: 'Favoritos'
  }
}

const rankingStack = {
  tab: 'RankingTab',
  screens: {
    ranking: 'Ranking'
  }
}

const searchStack = {
  tab: 'SearchTab',
  screens: {
    search: 'Buscar'
  }
}

const accountStack = {
  tab: 'AccountTab',
  screens: {
    account: 'Cuenta',
    login: 'Login'
  }
}

export const screen = {
  restaurant: restaurantStack,
  favorites: favoritesStack,
  ranking: rankingStack,
  search: searchStack,
  account: accountStack
}
