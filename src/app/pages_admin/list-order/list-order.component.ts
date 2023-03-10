import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
  remove,
} from '@angular/fire/database';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  list_orders: any = [];
  constructor(private db: Database, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const orders = ref(this.db, 'orders');
    const queryOrder = query(orders);
    get(queryOrder).then((snapshot) => {
      this.list_orders = snapshot.val();
    });
  }

  onDelete(id:number){

  }

}
