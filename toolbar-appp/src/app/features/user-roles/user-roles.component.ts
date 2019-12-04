import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserRole } from './user-role';
import { UserRoleService } from './user-role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  formGroup: FormGroup;
  displayedColumns: string[] = ['id', 'user', 'role'];
  dataSource: any; // = new MatTableDataSource<UserRole>(USER_ROLE_DATA);
  user: User = new User();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private service: UserRoleService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserRolesComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.user = data;
    alert(this.user.role);
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formGroup.controls.role.value);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserRole>(this.service.getAll());
    this.dataSource.paginator = this.paginator;
    this.formGroup = this.fb.group(
      {
        role: ['', Validators.required]
      });

      this.formGroup.patchValue({
        role: this.user.role, 
      });
  }

}
