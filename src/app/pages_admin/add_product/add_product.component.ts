import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";

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
  selector: 'app-add_product',
  templateUrl: './add_product.component.html',
  styleUrls: ['./add_product.component.css']
})

export class Add_productComponent implements OnInit {

  products: any = {id:'',name:'',image:'',detail:'',cat_id:'',price:''}
  constructor(private db: Database, private http: HttpClient, private router: Router, private storage: AngularFireStorage) { }

  ngOnInit() {}

  addProduct(){
    const new_products = ref(this.db, "products");
    const topUserPostsRef = query(new_products);
    get(topUserPostsRef)
    .then((snapshot) => {
        let id = snapshot.val().length
        this.products.id = id + 1;
        set(ref(this.db, 'products/' + id),this.products);
        this.router.navigate(['admin/','list_products'])
    });
  }

  spthem(sp: any) {}
}
