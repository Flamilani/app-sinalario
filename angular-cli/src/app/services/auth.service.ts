import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from './../models/User';

@Injectable()

export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000/';

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverApi + 'users/register', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverApi + 'users/authenticate', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProfile() {
  //  let headers = new Headers({'Content-Type': 'application/json', 'Authorization': this.authToken});
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serverApi + 'users/profile', {headers: headers})
    .pipe(map(res => res.json()));
  }

   getAllUsers() {
      return this.http.get(this.serverApi + 'users')
            .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem(this.serverApi + 'user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(this.authToken);
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
