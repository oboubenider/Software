import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Role } from './role';
import { RoleService } from './role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  displayedColumns: string[] = ['role', 'description'];
  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: RoleService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Role>(this.service.getAll());
    this.dataSource.paginator = this.paginator;
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
