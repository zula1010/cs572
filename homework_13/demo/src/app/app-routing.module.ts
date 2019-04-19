import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './users/userdetails.component';
import { ErrorComponent } from './users/error.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: 'userdetails', component: UserdetailsComponent }
    ]

  },
  { path: 'err', component: ErrorComponent }

  // {
  //   path: ':id', component: UsersComponent,
  //   children: [{ path: 'userdetails', component: UserdetailsComponent }]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
