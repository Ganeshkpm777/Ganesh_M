import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchProcessComponent } from './components/search-process/search-process.component';
import { SearchSuccessComponent } from './components/search-success/search-success.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'success',component: SearchSuccessComponent},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
  ],
})
export class DashboardRoutingModule {}
