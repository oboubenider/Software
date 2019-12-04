import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let users = [
      { id: 1, username: 'Admin',     friendlyname: 'admin',    email: 'admin@yahoo.com',     password: '123456', role: 'admin' },
      { id: 2, username: 'Joe',       friendlyname: 'joe',      email: 'joe@yahoo.com',       password: '123456', role: 'finance'},
      { id: 3, username: 'oussama',   friendlyname: 'ouss',     email: 'oussama@yahoo.com',   password: '123456', role: 'engineering'},
      { id: 4, username: 'mike',      friendlyname: 'mike',     email: 'mike@yahoo.com',      password: '123456', role: 'sales'},
      { id: 5, username: 'goku',      friendlyname: 'goku',     email: 'goku@yahoo.com',      password: '123456', role: 'hr'},
      { id: 6, username: 'vegeta',    friendlyname: 'vegeta',   email: 'vegeta@yahoo.com',    password: '123456', role: 'su'},
      { id: 7, username: 'tali',       friendlyname: 'tali',    email: 'tali@yahoo.com',      password: '123456', role: ''}

    ];

    return { users };

  }

}
