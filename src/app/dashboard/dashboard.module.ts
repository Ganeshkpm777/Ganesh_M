import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SearchProcessComponent } from './components/search-process/search-process.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchSuccessComponent } from './components/search-success/search-success.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    SearchProcessComponent,
    SearchSuccessComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,

  ],
 providers:[
  LoginComponent
 ]
})
export class DashboardModule { }
