import { Injectable, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/user.model';
import { currentUser } from '../shared/currentUser..model';

@Injectable({
  providedIn: 'root'
})

export class UsersService implements OnInit {
  
  currentUser: currentUser = new currentUser();
  URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public getUsers(){ 
    return this.httpClient.get(this.URL + 'users');
  }

  public createUser(user: User) {
    return this.httpClient.post(`${this.URL + 'users'}`, user);
  }

}
