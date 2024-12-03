import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutModule } from './layouts/admin/admin.layout.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserLayoutModule } from './layouts/user/user.layout.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    UserLayoutModule,
   
    
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
