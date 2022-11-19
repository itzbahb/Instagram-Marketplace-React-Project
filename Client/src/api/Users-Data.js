import ClothingIcon from "./images/clothing-store.png";
import FoodIcon from "./images/food-store.png";
import WaterIcon from "./images/water-bottle.png";
import GumIcon from "./images/gum.png";
import BlackShirtIcon from "./images/black-shirt.png";
import BlueShirtIcon from "./images/blue-shirt.png";
import RedShirtIcon from "./images/red-shirt.png";
import { User, Post } from "./Objects";

let users = [
  new User("Bob", "test@gmail.com", "123", "1", "Buyer", null, null, null, null, false),
  new User("Clothes.lb", "test@gmail.com", "123", "2", "Seller", ClothingIcon, [
    new Post("Red Shirt", "1", 30, RedShirtIcon, "", 500),
    new Post("Blue Shirt", "2", 20, BlueShirtIcon, "", 500),
    new Post("Black Shirt", "3", 20, BlackShirtIcon, "", 500)
  ], null, null, false),
  new User("Food.lb", "test@gmail.com", "123", "3", "Seller", FoodIcon, [
    new Post("Bottle of Water", "1", 2, WaterIcon, "", 500),
    new Post("Gum", "2", 4, GumIcon, "", 500)
  ], null, null, false),
  new User("Joe", "test@gmail.com", "123", "4", "Driver", null, null, null, null, false)];

export function getUsers() {
  return users;
}

export function getNextId(){
  return users.length + 1
}

export function getSellers() {
  return users.filter(user => user.type === "Seller");
}

export function getUser(userId) {
  return users.find(user => user.userId === userId);
}

export function addUser(User){
  users.push(User)
  return users
}

// export async function getUsers() {
//   try {
//     const response = await axios.get('/users');
//      return response.map(user => new User(user.username, user.email, user.password, "0", user.type, null, null, null, null, false));
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function getSellers() {
//   try {
//     const response = await axios.get('/users/sellers');
//      return response.map(user => new User(user.username, user.email, user.password, "0", "Seller", null, null, null, null, false));;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function getUser() {
//   try {
//     const response = await axios.get('/users/:Id');
//      return new User(response.username, response.email, response.password, "0", response.type, null, null, null, null, false);
//   } catch (error) {
//     console.error(error);
//   }
// }
