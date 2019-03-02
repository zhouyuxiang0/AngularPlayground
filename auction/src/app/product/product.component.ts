import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private productId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品", "硬件设备"]),
      new Product(2, "第二个商品", 2.99, 2.5, "商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品", "硬件设备"]),
      new Product(3, "第三个商品", 3.99, 4.5, "商品描述啦啦啦啦啦啦啦啦阿联", ["硬件设备"]),
      new Product(4, "第四个商品", 4.99, 1.5, "商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品", "硬件设备"]),
      new Product(5, "第五个商品", 5.99, 3.5, "商品描述啦啦啦啦啦啦啦啦阿联", ["电子产品"]),
      new Product(6, "第六个商品", 6.99, 2.5, "商品描述啦啦啦啦啦啦啦啦阿联", ["图书"]),
    ];
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"])
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
    })
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
