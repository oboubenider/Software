//import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { currentUser } from '../shared/currentUser..model';
import { UsersService } from '../Services/users.service';

@Injectable()
export class RoleGuard implements CanActivate {
  currentUser: currentUser;

  //constructor(private _authService: AuthService, private _router: Router) {
  constructor(private _router: Router, private userService: UsersService) {
    this.currentUser = this.userService.currentUser;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.currentUser.role === next.data.role) {
       return true;
    }

    return false;
  }

}