import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from './../../Services/users.service';
import { MatDialog, MatDialogConfig } from '@angular/material'
import { UserRolesComponent } from '../user-roles/user-roles.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'friendlyname', 'email', 'password', 'role', 'actions'];
  dataSource: any[] = []; // = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private service: UsersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: any[]) => { this.dataSource = data; })
  }

  onCreate() {
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { row };
    this.dialog.open(UserRolesComponent, dialogConfig);

    const dialogRef = this.dialog.open(UserRolesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => row.role = data
    );
  }
}
