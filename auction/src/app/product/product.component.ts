import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private productId: number;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"])
    // this.routeInfo.data.subscribe((data: {product: Product}) => {
    //   this.productId = data.product.id;
    // })
  }

}


