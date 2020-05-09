import { CustomersComponent } from './customers/customers.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'customerreg', component:CustomerRegComponent},
  {path: 'customers', component:CustomersComponent},
  { path: '', redirectTo: '/customers',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
