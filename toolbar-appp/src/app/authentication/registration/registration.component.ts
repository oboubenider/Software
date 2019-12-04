import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../Services/users.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {   
  }

  ngOnInit() {
    this.formGroup = this.fb.group(
      {
        id:             [],
        username:       ['', Validators.required],
        friendlyname:   ['', Validators.required],
        password:       ['', Validators.required],
        repeatpassword: ['', Validators.required],
        email:          ['', [Validators.required, Validators.email]]
      });
    }

    register() {
      this.userService.createUser(this.formGroup.value).subscribe((ret)=>{console.log("User created: ", ret); });
    }
    
}
