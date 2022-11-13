export class User {
  constructor(username, userId, type, pic, page) {
    this.username = username;
    this.userId = userId;
    this.type = type;
    this.pic = pic;
    this.orders = [];
    this.page = page;
  }
}

export class Post {
  constructor(title, postId, price, source) {
    this.title = title;
    this.price = price;
    this.postId = postId;
    this.source = source;
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