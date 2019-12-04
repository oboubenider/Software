import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getAll() : Role[] {
    return ROLE_DATA;
  }  

}

const ROLE_DATA: Role[] = [
  {id: 1, role: 'Administrator', description: 'Admin user.'},
  {id: 2, role: 'Financial',     description: 'Financial admin user.'},
  {id: 3, role: 'Sales',         description: 'Sales admin user.'},
  {id: 4, role: 'HR',            description: 'HR Admin user.'},
  {id: 5, role: 'Engineering',   description: 'Engineering user.'},
  {id: 6, role: 'Superuser',     description: 'Admin super user.'}
];
