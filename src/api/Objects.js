export class User {
  constructor(username, password, userId, type, pic, page) {
    this.username = username;
    this.password = password;
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