import ClothingIcon from "./images/clothing-store.png";
import FoodIcon from "./images/food-store.png";
import WaterIcon from "./images/water-bottle.png";
import GumIcon from "./images/gum.png";
import BlackShirtIcon from "./images/black-shirt.png";
import BlueShirtIcon from "./images/blue-shirt.png";
import RedShirtIcon from "./images/red-shirt.png";
import {Store, Item } from "./Objects";

const stores = [
  new Store("Clothes Store", "1", ClothingIcon, [
    new Item("Red Shirt", "1", RedShirtIcon, 30),
    new Item("Blue Shirt", "2", BlueShirtIcon, 20),
    new Item("Black Shirt", "3", BlackShirtIcon, 35)
  ]),
  new Store("Market", "2", FoodIcon, [
    new Item("Bottle of Water", "1", WaterIcon, 2),
    new Item("Gum", "2", GumIcon, 7)
  ])
];

export function getStores() {
  return stores;
}

export function getStore(storeId) {
  return stores.find((store) => store.storeId === storeId);
}
