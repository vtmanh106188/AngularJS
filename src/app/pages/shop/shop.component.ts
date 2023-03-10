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
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any = [];
  categories: any = [];
  list: any = [];
  detailProduct: any = [];
  new_cat: any = [];

  constructor(private db: Database,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    

    const queryProducts = query(ref(this.db, 'products'));
    get(queryProducts)
    .then(snap => { 
      let data = snap.val();

      let getProductsByCategory = data.filter((e: { cat_id: number; }) => e.cat_id == id);

      this.list = getProductsByCategory;
      console.log(this.list);
      

    })
  }

}


