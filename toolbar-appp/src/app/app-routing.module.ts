import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { PageNotFoundComponentComponent } from './features/page-not-found-component/page-not-found-component.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './features/users/users.component';
import { RolesComponent } from './features/roles/roles.component';
import { UserRolesComponent } from './features/user-roles/user-roles.component';
import { AdministratorComponent } from './features/administrator/administrator.component';
import { FinancialComponent } from './features/financial/financial.component';
import { SalesComponent } from './features/sales/sales.component';
import { HumanResourcesComponent } from './features/human-resources/human-resources.component';
import { EngineeringComponent } from './features/engineering/engineering.component';
import { SuperUserComponent } from './features/super-user/super-user.component';
import { RoleGuard } from './guards/role-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users',       component: UsersComponent},
  { path: 'roles',       component: RolesComponent},
  { path: 'userroles',   component: UserRolesComponent, canActivate: [RoleGuard], data: {role: 'admin'}  },
  { path: 'home',        component: HomeComponent },
  { path: 'admin',       component: AdministratorComponent, canActivate: [RoleGuard], data: {role: 'admin'} },
  { path: 'finance',     component: FinancialComponent, canActivate: [RoleGuard], data: {role: 'finance'} },
  { path: 'sales',       component: SalesComponent, canActivate: [RoleGuard], data: {role: 'sales'}  },
  { path: 'hr',          component: HumanResourcesComponent, canActivate: [RoleGuard], data: {role: 'hr'}  },
  { path: 'engineering', component: EngineeringComponent, canActivate: [RoleGuard], data: {role: 'engineering'}  },
  { path: 'su',          component: SuperUserComponent, canActivate: [RoleGuard], data: {role: 'su'}  },
  { path: 'login',       component: LoginComponent },
  { path: 'register',    component: RegistrationComponent },
  { path: '**',          component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
