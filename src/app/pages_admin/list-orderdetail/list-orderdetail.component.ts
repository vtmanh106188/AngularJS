import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
  update,
} from '@angular/fire/database';

@Component({
  selector: 'app-list-orderdetail',
  templateUrl: './list-orderdetail.component.html',
  styleUrls: ['./list-orderdetail.component.css']
})
export class ListOrderdetailComponent implements OnInit {
  list_orderdetail: any;
  constructor(private db: Database,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    
    const orderDetail = ref(this.db, 'order_detail');
    const queryDetail = query(orderDetail);
    get(queryDetail).then((snapshot) => {
      let data = snapshot.val();
      console.log('data', data);
      
      let arrayList = data.filter((e) => {
        return e.order_id == id;
      })

      this.list_orderdetail = arrayList;
      console.log(this.list_orderdetail);
      
    });
  }

}
