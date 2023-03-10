import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shop_cart: any;
  count: any = 0;
  constructor() { }

  ngOnInit() {
    this.shop_cart = JSON.parse(localStorage.getItem('cart'))
    console.log(this.shop_cart);
    
    this.shop_cart.forEach(e => {
      this.count += (e.price * e.quantity)
    })
  }

}
