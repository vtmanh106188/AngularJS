import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: any;
  count: any = 0;
  constructor() { }

  ngOnInit() {
    this.checkout = JSON.parse(localStorage.getItem('cart'))
    console.log(this.checkout);
    
    this.checkout.forEach(e => {
      this.count += (e.price * e.quantity)
    })
  }

}
