import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private router: Router){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let productId: number = route.params["id"];
        if (productId == 1) {
            return new Product(1, "", 1.99, 3.5, "", ["", ""]);
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    } 
}