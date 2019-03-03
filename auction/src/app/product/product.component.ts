import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, ProductService } from '../shared/product.service';
import 'rxjs/add/operator/debounceTime';
import debounceTime from 'r';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private keyword: string;
  private titleFilter:FormControl = new FormControl();
  // private productId: number;

  constructor(
    private productService: ProductService
  ) {
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"])
    // this.routeInfo.data.subscribe((data: {product: Product}) => {
    //   this.productId = data.product.id;
    // })
  }

}


