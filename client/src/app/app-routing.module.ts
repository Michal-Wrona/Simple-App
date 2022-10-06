import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  {path: 'user-edit/:username', component: UserEditComponent},
  {path: 'user-data', component: UserDataComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent},
  {path: '**', component: ListComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
