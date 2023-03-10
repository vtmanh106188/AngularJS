import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopComponent } from './pages/shop/shop.component';
import { DetailproductComponent } from './pages/detailproduct/detailproduct.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomeAdminComponent } from './pages_admin/home-admin/home-admin.component';
import { ListProductsComponent } from './pages_admin/list-products/list-products.component';
import { ListUsersComponent } from './pages_admin/list-users/list-users.component';
import { ListOrderComponent } from './pages_admin/list-order/list-order.component';
import { Add_productComponent } from './pages_admin/add_product/add_product.component';
import { Edit_productComponent } from './pages_admin/edit_product/edit_product.component';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';

import { AuthGuard } from './auth.guard';
import { ListOrderdetailComponent } from './pages_admin/list-orderdetail/list-orderdetail.component';


const routes: Routes = [
  // Trang Chủ
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      },
      {
        path: 'shop/:id',
        component:ShopComponent
      },
      {
        path: 'cart',
        component:CartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'checkout',
        component:CheckoutComponent
      },
      {
        path: 'detailproduct/:id',
        component:DetailproductComponent
      }
    ]
  },

  //Trang Admin
  {
    path:'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeAdminComponent
      },
      {
        path: 'list_products',
        component: ListProductsComponent
      },
      {
        path: 'list_users',
        component: ListUsersComponent
      },
      {
        path: 'list_order',
        component: ListOrderComponent
      },
      {
        path: 'list_orderdetail/:id',
        component: ListOrderdetailComponent
      },
      {
        path: 'add_product',
        component: Add_productComponent
      },
      {
        path: 'edit_product/:id',
        component: Edit_productComponent
      },
      
    ]
  },

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dangky',
    component: DangkyComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
