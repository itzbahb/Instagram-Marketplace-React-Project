export class User {
  constructor(username, userId, type, orders) {
    this.username = username;
    this.userId = userId;
    this.type = type;
    this.orders = orders;
  }
}

export class Store {
  constructor(title, storeId, source, items) {
    this.title = title;
    this.storeId = storeId;
    this.source = source;
    this.items = items;
  }
}

export class Item {
  constructor(title, itemId, source, price) {
    this.title = title;
    this.itemId = itemId;
    this.source = source;
    this.price = price;
  }
}

export class Order{
  constructor(orderId, from, to, items){
    this.orderId = orderId
    this.from = from
    this.to = to
    this.items = items
    this.isAssigned = false
    this.dessignatedDriver = undefined
  }
}