import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Product } from '../shared/product.service';

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