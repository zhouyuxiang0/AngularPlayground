import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "1商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品", "硬件设备"]),
    new Product(2, "第二个商品", 2.99, 2.5, "2商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品", "硬件设备"]),
    new Product(3, "第三个商品", 3.99, 4.5, "3商品描述啦啦啦啦啦啦啦啦阿联", ["硬件设备"]),
    new Product(4, "第四个商品", 4.99, 1.5, "4商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品", "硬件设备"]),
    new Product(5, "第五个商品", 5.99, 3.5, "5商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品"]),
    new Product(6, "第六个商品", 6.99, 2.5, "6商品描述啦啦啦啦啦啦啦啦阿联", ["图书"]),
  ];
  private comments: Comment[] = [
    new Comment(1,1,"2018-7-23","张三",5,"不错"),
    new Comment(2,1,"2018-7-23","李四",4,"不错"),
    new Comment(3,1,"2018-7-23","王五",3,"不错"),
    new Comment(4,2,"2018-7-23","赵六",2,"不错")
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ){}
}