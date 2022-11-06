import ClothingIcon from './images/clothing-store.png';
import FoodIcon from './images/food-store.png'
import WaterIcon from './images/water-bottle.png'
import GumIcon from './images/gum.png'
import BlackShirtIcon from './images/black-shirt.png'
import BlueShirtIcon from './images/blue-shirt.png'
import RedShirtIcon from './images/red-shirt.png'

const stores = [
  {
    storeId: '1',
    title: 'Clothes Store',
    source: ClothingIcon,
    items: [
      {
        itemId: 1,
        title: 'Red Shirt',
        price: 30,
        source: RedShirtIcon
      },
      {
        itemId: 2,
        title: 'Blue Shirt',
        price: 20,
        source: BlueShirtIcon
      },
      {
        itemId: 3,
        title: 'Black Shirt',
        price: 35,
        source: BlackShirtIcon
      }
    ]
  },
  {
    storeId: '2',
    title: 'Market',
    source: FoodIcon,
    items: [
      {
        itemId: 1,
        title: 'Bottle of Water',
        price: 2,
        source: WaterIcon
      },
      {
        itemId: 2,
        title: 'Gum',
        price: 7,
        source: GumIcon
      }
    ]
  }
]

export function getStores() {
  return stores;
}

export function getStore(storeId) {
  return stores.find(store => store.storeId === storeId);
}
