import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin.layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ConfigModule } from './config/config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';

import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    FooterComponent,
    SideBarComponent,
    TopBarComponent,
    MenuComponent,
    MenuItemComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    ButtonModule,
    RippleModule,
    ConfigModule,
    RouterModule,
    MenubarModule,
    

    BrowserAnimationsModule,
    
  ],
  exports:[
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
