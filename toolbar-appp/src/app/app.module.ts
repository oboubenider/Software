import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCard, MatCardModule, MatSpinner, MatMenuModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';

// import {MatToolbarModule} from '@angular/material/toolbar';
import { PageNotFoundComponentComponent } from './features/page-not-found-component/page-not-found-component.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './features/users/users.component';
import { RolesComponent } from './features/roles/roles.component';
import { UserRolesComponent } from './features/user-roles/user-roles.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './Services/data.service';
import { AdministratorComponent } from './features/administrator/administrator.component';
import { SalesComponent } from './features/sales/sales.component';
import { HumanResourcesComponent } from './features/human-resources/human-resources.component';
import { EngineeringComponent } from './features/engineering/engineering.component';
import { SuperUserComponent } from './features/super-user/super-user.component';
import { FinancialComponent } from './features/financial/financial.component'
import { RoleGuard } from './guards/role-guard.service';
import { UsersService } from './Services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PageNotFoundComponentComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UsersComponent,
    RolesComponent,
    UserRolesComponent,
    AdministratorComponent,
    SalesComponent,
    HumanResourcesComponent,
    EngineeringComponent,
    SuperUserComponent,
    FinancialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
],
  providers: [RoleGuard],
  bootstrap: [AppComponent],
  entryComponents: [UserRolesComponent]
})
export class AppModule { }
