import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout()
    .then(res => {
      window.localStorage.removeItem('admin');
      window.alert('Đăng xuất thành công!')
      this.router.navigate(['/'])
    })
    .catch(err => console.log(err))
  }
}
