import ClothingIcon from './images/clothing-store.png';
import FoodIcon from './images/food-store.png'


const stores = [
  {
    storeId: 1,
    title: "Clothes Store",
    source: ClothingIcon,
    items: [
      {
        itemId: 1,
        title: "Red Shirt",
        price: 30,
        source: "./images/red shirt.png"
      },
      {
        itemId: 2,
        title: "Blue Shirt",
        price: 20,
        source: "./images/blue shirt.png"
      },
      {
        itemId: 3,
        title: "Black Shirt",
        price: 35,
        source: "./images/black shirt.png"
      }
    ]
  },
  {
    storeId: 2,
    title: "Market",
    source: FoodIcon,
    items: [
      {
        itemId: 1,
        title: "Bottle of Water",
        price: 2,
        source: "./images/water bottle.png"
      },
      {
        itemId: 2,
        title: "Gum",
        price: 7,
        source: "./images/gum.png"
      }
    ]
  }
]

export function getStores() {
  return stores;
}