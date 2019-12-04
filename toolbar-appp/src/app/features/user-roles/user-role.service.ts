import { Injectable, OnInit } from '@angular/core';
import { UserRole } from './user-role';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  getAll() : UserRole[] {
      return USER_ROLE_DATA;
  }
}

const USER_ROLE_DATA: UserRole[] = [
  {id: 1, user: 'Oussama', role: 'Administrator'},
  {id: 2, user: 'rAOUF',   role: 'HR'}
];

