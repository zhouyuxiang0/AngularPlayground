import { Code404Component } from './code404/code404.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent 
  },{
    path: 'product/:productId', 
    component: ProductDetailComponent
    // resolve: {product: ProductResolve}
    // canActivate: [LoginGuard], 
    // canDeactivate:[UnsavedGuard] 
  },{
    path: '**', 
    component: Code404Component 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginGuard,
    UnsavedGuard,
    ProductResolve
  ]
})
export class AppRoutingModule { }
