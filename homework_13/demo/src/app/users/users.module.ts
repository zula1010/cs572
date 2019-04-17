import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { MyCanActivateGuard } from './mycanactivate.guard'
@NgModule({
  declarations: [
    UserdetailsComponent,
    UsersComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: ':uuid', component: UserdetailsComponent, canActivate: [MyCanActivateGuard] },

    ])
  ],
  providers: [MyCanActivateGuard],
  bootstrap: [UsersComponent]

})
export class UsersModule { }
