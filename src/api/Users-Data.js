import ClothingIcon from "./images/clothing-store.png";
import FoodIcon from "./images/food-store.png";
import WaterIcon from "./images/water-bottle.png";
import GumIcon from "./images/gum.png";
import BlackShirtIcon from "./images/black-shirt.png";
import BlueShirtIcon from "./images/blue-shirt.png";
import RedShirtIcon from "./images/red-shirt.png";
import { User, Post } from "./Objects";

const users = [
  new User("Bob", "1", "Buyer", null, null),
  new User("Clothes.lb", "2", "Seller", ClothingIcon, [
    new Post("Red Shirt", "1", 30, RedShirtIcon),
    new Post("Blue Shirt", "2", 20, BlueShirtIcon),
    new Post("Black Shirt", "3", 20, BlackShirtIcon)
  ]),
  new User("Food.lb", "3", "Seller", FoodIcon, [
    new Post("Bottle of Water", "1", 2, WaterIcon),
    new Post("Gum", "2", 4, GumIcon)
  ]),
  new User("Joe", "4", "Driver", null, null)
];

export function getSellers() {
  return users.filter((x) => x.type = "Seller");
}

export function getUser(userId) {
  return users.find((x) => x.userId === userId);
}