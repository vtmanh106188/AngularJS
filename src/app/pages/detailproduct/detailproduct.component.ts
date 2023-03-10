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

interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
  detail: string;
  cat_id: number;
}

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  
  constructor(private db: Database,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  products: any = [];
  categories: any = [];
  list: any = [];
  detailProduct: any = [];
  new_cat: any = [];
  quantity = 1;
  ngOnInit() {
    let id = +this.route.snapshot.params['id'];

    const dataProducts = ref(this.db, 'products/' + (id - 1));
    onValue(dataProducts, (snapshot) => {
      const data = snapshot.val();
      this.products = data;
      const catID = this.products.cat_id;

      const dataNew = ref(this.db, 'categories/'+ (catID-1));
      onValue(dataNew, (snapshot) => {
        const data2 = snapshot.val();
        this.new_cat = data2;

        this.list.push({ ...this.products, class: this.new_cat });
        this.detailProduct = this.list[0];
        console.log(this.detailProduct);
      });
      
    });
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


}
