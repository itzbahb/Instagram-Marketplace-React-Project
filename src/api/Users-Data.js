import ClothingIcon from "./images/clothing-store.png";
import FoodIcon from "./images/food-store.png";
import WaterIcon from "./images/water-bottle.png";
import GumIcon from "./images/gum.png";
import BlackShirtIcon from "./images/black-shirt.png";
import BlueShirtIcon from "./images/blue-shirt.png";
import RedShirtIcon from "./images/red-shirt.png";
import { User, Post } from "./Objects";

const users = [
  new User("Bob", "123", "1", "Buyer", null, null, null, null),
  new User("Clothes.lb", "123", "2", "Seller", ClothingIcon, [
    new Post("Red Shirt", "1", 30, RedShirtIcon, "", 500),
    new Post("Blue Shirt", "2", 20, BlueShirtIcon, "", 500),
    new Post("Black Shirt", "3", 20, BlackShirtIcon, "", 500)
  ], null, null),
  new User("Food.lb", "123", "3", "Seller", FoodIcon, [
    new Post("Bottle of Water", "1", 2, WaterIcon, "", 500),
    new Post("Gum", "2", 4, GumIcon, "", 500)
  ], null, null),
  new User("Joe", "123", "4", "Driver", null, null, null, null)
];

export function getUsers() {
  return users;
}

export function getSellers() {
  return users.filter(user => user.type === "Seller");
}

export function getUser(userId) {
  return users.find(user => user.userId === userId);
}