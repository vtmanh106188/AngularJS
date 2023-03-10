import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import {
  Database,
  query,
  set,
  ref,
  get,
  onValue,
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private router: Router, private auth: AngularFireAuth, private db: Database) {}
  
  dangky(email:any,password:any){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  login(email:any,password:any){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  logout() {
    return this.auth.signOut();
  }

  get currentUser() {
    return this.auth.authState;
  }
}


