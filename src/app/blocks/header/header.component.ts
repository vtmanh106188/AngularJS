import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
} from '@angular/fire/database';

interface Categories {
  id: number;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categories: any = [];

  constructor(private db: Database, private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const category = ref(this.db, 'categories');

    const queryCategories = query(category);
    get(queryCategories).then((snapshot) => {
      this.categories = snapshot.val();
    });
  }

  onLogout(){
    this.authService.logout()
    .then(res => {
      window.localStorage.removeItem('khachhang')
      window.localStorage.removeItem('cart')
      window.alert('Đăng xuất thành công!')
      this.router.navigate(['/'])
    })
    .catch(err => console.log(err))
  }
}
