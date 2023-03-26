import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductDeatilComponent } from './product-deatil/product-deatil.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpddateProductComponent } from './seller-upddate-product/seller-upddate-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'seller-update-product/:id',
    component: SellerUpddateProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'search/:query',
    component: SearchComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'detail/:productId',
    component: ProductDeatilComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
