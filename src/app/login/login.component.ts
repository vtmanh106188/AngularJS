import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
} from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {email:'',password:''};
  
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private db: Database) { }

  ngOnInit() {}

  onSubmit(){
    this.authService.login(this.user.email, this.user.password)
      .then(res => {
        const users = ref(this.db, 'users');
        const queryUser = query(users);
        get(queryUser).then((snapshot) => {
          let data = snapshot.val();
          let admin = data.find((e: { email: string; password: string; role: string; }) => e.email == this.user.email && e.password == this.user.password && e.role == 'admin')
          let thanhvien = data.find((e: { email: string; password: string; role: string; }) => e.email == this.user.email && e.password == this.user.password && e.role == 'thanhvien')
          let khachhang = data.find((e: { email: string; password: string; role: string; }) => e.email == this.user.email && e.password == this.user.password && e.role == 'khachhang')

          if(admin){
            localStorage.setItem('admin',JSON.stringify({...this.user, role: 'admin'}))
            window.alert('Đăng nhập admin thành công')
            this.router.navigate(['admin'])
          }

          if(thanhvien){
            localStorage.setItem('admin',JSON.stringify({...this.user, role: 'thanhvien'}))
            window.alert('Đăng nhập tài khoản thành viên thành công')
            this.router.navigate(['admin'])
          }

          if(khachhang){
            localStorage.setItem('khachhang',JSON.stringify({...this.user, role: 'khachhang'}))
            window.alert('Đăng nhập tài khoản thành công')
            this.router.navigate(['/'])
          }
        });
      })
      .catch(err => console.log(err.message));
    
  }

  
}
