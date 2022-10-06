import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../models/user';
import {map} from 'rxjs/operators';
import { UserLogin } from '../models/userLogin';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:7116/api/'
  user: User;
  users: User[];
  private currentUserSource = new ReplaySubject<UserLogin>(1);
  currentUser$ = this.currentUserSource.asObservable();



  // token = this.currentUser$.pipe(
  //   map(())
  // )
  // const headers = new Headers({'Authorization': localStorage.setItem('user', JSON.stringify(user))})

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl +'user')
  }

  // getUser(id) {
  //   return this.http.get<User>(this.baseUrl + 'user/id' + id)
  // }


  getUser(username) {
    return this.http.get<User>(this.baseUrl + 'user/username?name=' + username)
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'user', user, httpOptions)
  }

  // updateUser(user: User) {
  //   return this.http.put(this.baseUrl + 'user', user)
  // }

  login(model: any) { 
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: UserLogin) => {
      const user = response;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
      })
    )
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: UserLogin) {
    this.currentUserSource.next(user);
  }


}
