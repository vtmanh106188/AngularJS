import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
} from '@angular/fire/database';

interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
  detail: string;
  cat_id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  cartItem: any;
  constructor(private db: Database, private http: HttpClient) {}

  ngOnInit() {
    const products = ref(this.db, 'products');
    const queryProduct = query(products);
    get(queryProduct).then((snapshot) => {
      this.products = snapshot.val();
    });
  }

  addCart(e:any,id:any,name:any,price:any,image:any,detail:any,cat_id:any ) {
    e.preventDefault();

    this.cartItem = JSON.parse(localStorage.getItem("cart"));
    let cart = this.cartItem;
    if(cart==null){
        cart = [];
        cart.push({id: id, name: name, price: price, image: image, detail: detail, quantity: 1});
    }else{
        let item = cart.find(item => item.id === id);
        if(item) item.quantity++;
        else cart.push({id: id, name: name, price: price, image: image, detail: detail, quantity: 1});
    }
    
	  alert("Thêm vào giỏ hàng thành công");
    localStorage.setItem("cart", JSON.stringify(cart));
   
  }
}
