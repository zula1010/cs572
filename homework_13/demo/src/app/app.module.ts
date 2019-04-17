import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './users/error.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
// import { UserdetailsComponent } from './users/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
