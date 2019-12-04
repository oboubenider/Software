import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../Services/users.service';
import { User } from 'src/app/shared/user.model';
import { currentUser } from 'src/app/shared/currentUser..model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any[]=[];
  user: User;

  username: string;
  password: string;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data : any[])=>{ this.users = data; console.log(this.users)})
    this.formGroup = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  public login() {

    this.logout();

    this.username = this.formGroup.controls.username.value;
    this.password = this.formGroup.controls.password.value;

    for (let i = 0; i < this.users.length ; i++) {
      let item = this.users[i];
      if (item.username.match(this.username))
      {
        if (item.password.match(this.password))
        {
          // this.userService.currentUser.isAdmin         = (this.user.role.match("admin"));
          this.userService.currentUser.isAuthenticated = true;
          this.userService.currentUser.username        = this.username;
          this.userService.currentUser.role            = item.role;

          alert(this.userService.currentUser.username);
        }
      }
    }
  }

  public logout(){
    this.userService.currentUser.id = 0;
    this.userService.currentUser.isAdmin = false;
    this.userService.currentUser.isAuthenticated = false;
    this.userService.currentUser.role = '';
    this.userService.currentUser.username = '';
  }
}
