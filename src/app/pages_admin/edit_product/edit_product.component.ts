import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  selector: 'app-edit_product',
  templateUrl: './edit_product.component.html',
  styleUrls: ['./edit_product.component.css'],
})
export class Edit_productComponent implements OnInit {
  category: any = [];

  idNow: number | undefined;
  addItem = {
    name: '',
    id: '',
    price: '',
    detail: '',
    cat_id: '',
    image: '',
  };

  constructor(
    private db: Database,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.idNow = id - 1;
    
    const category = ref(this.db, 'categories');

    const queryCategories = query(category);
    get(queryCategories).then((snapshot) => {
      this.category = snapshot.val();
    });

    const productDetail = ref(this.db, `products/${id - 1}`);
    onValue(productDetail, (snapshot) => {
      const data = snapshot.val();
      this.addItem.id = data.id;
      this.addItem.name = data.name;
      this.addItem.cat_id = data.cat_id;
      this.addItem.price = data.price;
      this.addItem.detail = data.detail;
      this.addItem.image = data.image;
    });
  }

  onChange($event: any, deviceValue: string) {
    this.addItem.cat_id = deviceValue;
  }

  onSubmit(addFrom: NgForm) {
    const products = ref(this.db, 'products');
    const queryProduct = query(products);
    set(ref(this.db, 'products/' + this.idNow), this.addItem);
    this.router.navigate(['admin/list_products']);
  }
}
