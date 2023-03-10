import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { environment } from './environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { provideDatabase, getDatabase } from '@angular/fire/database'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './blocks/header/header.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductsComponent } from './pages_admin/list-products/list-products.component';
import { ListOrderComponent } from './pages_admin/list-order/list-order.component';
import { ListUsersComponent } from './pages_admin/list-users/list-users.component';
import { Add_productComponent } from './pages_admin/add_product/add_product.component';
import { Edit_productComponent } from './pages_admin/edit_product/edit_product.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';
import { ShopComponent } from './pages/shop/shop.component';
import { DetailproductComponent } from './pages/detailproduct/detailproduct.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ListOrderdetailComponent } from './pages_admin/list-orderdetail/list-orderdetail.component';


@NgModule({
  declarations: [													
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    AdminLayoutComponent,
    ListProductsComponent,
    ListOrderComponent,
    ListUsersComponent,
    ListOrderdetailComponent,
    Add_productComponent,
    Edit_productComponent,
    LoginComponent,
    DangkyComponent,
    ShopComponent,
    DetailproductComponent,
    CheckoutComponent,
    CartComponent,
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideDatabase(()=>getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
