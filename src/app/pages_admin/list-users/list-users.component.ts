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
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  list_users: any = [];
  constructor(private db: Database, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const users = ref(this.db, 'users');
    const queryUser = query(users);
    get(queryUser).then((snapshot) => {
      this.list_users = snapshot.val();
    });
  }
  phanQuyen: any;
  onDelete(id: number) {
    
    let idSP = id;
    
    this.phanQuyen = localStorage.getItem('admin')

    let pq = JSON.parse(this.phanQuyen)
    console.log(pq.role);
    
    
    if(pq.role=="thanhvien"){
      window.alert('Bạn không có quyền xóa')
    }else{
      const accept = confirm("Bạn có chắc sẽ xóa tài khoản này");
      if (!accept) return;

      const user = ref(this.db, "users/" + (idSP-1));
      remove(user);
      window.location.reload()
    }
  }

}
