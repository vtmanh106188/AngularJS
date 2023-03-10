import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
} from '@angular/fire/database';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css'],
})
export class DangkyComponent implements OnInit {
  user = { id: '', email: '', password: '', re_password: '', role:'khachhang'};
  
  constructor(
    private db: Database,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegister() {
    let isVerified = true;

    if (this.user.password != this.user.re_password) {
      window.alert('Mật khẩu nhập lại không trùng khớp');
      isVerified = false;
    }

    if (
      this.user.email == '' ||
      this.user.password == '' ||
      this.user.re_password == ''
    ) {
      window.alert('Không bỏ trống nhé!!!');
      isVerified = false;
    }

    if (this.user.password.length < 6) {
      window.alert('Password không được ít hơn 6 kí tự');
      isVerified = false;
    }

    if (isVerified) {
      this.authService.dangky(this.user.email, this.user.password);

      const new_user = ref(this.db, 'users');
      const topUserPostsRef = query(new_user);
      get(topUserPostsRef).then((snapshot) => {
        let id = snapshot.val().length;
        this.user.id = id + 1;
        set(ref(this.db, 'users/' + id), this.user);
        window.alert('Đăng ký tài khoản thành công')
        this.router.navigate(['login'])
      });

    }
  }
}
