import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent }  from './componenets/user/form-login/form-login.component'
import { ClientListComponent }  from './componenets/client/client-list/client-list.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: FormLoginComponent
  },
  {
    path: 'cliente',
    component: ClientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
