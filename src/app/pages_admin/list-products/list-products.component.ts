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

interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
  detail: string;
  cat_id: number;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  list_products: any = [];
  constructor(private db: Database, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const products = ref(this.db, 'products');
    const queryProduct = query(products);
    get(queryProduct).then((snapshot) => {
      this.list_products = snapshot.val();
    });
  }
  phanQuyen: any = {}
  onDelete(id: number) {
    let idSP = id;
    
    this.phanQuyen = localStorage.getItem('admin')
    let pq = JSON.parse(this.phanQuyen)
    if(pq.role=="admin"){
      const accept = confirm("Bạn có chắc sẽ xóa sản phẩm này");
      if (!accept) return;

      const product = ref(this.db, "products/" + (idSP-1));
      remove(product);
      window.location.reload()
    }else{
      window.alert('Bạn không có quyền xóa')
    }
    
  }

}
