export class User {
  constructor(username, password, userId, type, pic, page, instaId, instaToken) {
    this.username = username;
    this.password = password;
    this.userId = userId;
    this.type = type;
    this.pic = pic;
    this.orders = [];
    this.page = page;
    this.instaId = instaId;
    this.instaToken = instaToken;
  }
}

export class Post {
  constructor(title, postId, price, source, description, size) {
    this.title = title;
    this.price = price;
    this.postId = postId;
    this.source = source;
    this.description = description
    this.size = size
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