import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomListRoutingModule } from './room-list-routing.module';
import { RoomListComponent } from './room-list.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    RoomListComponent,
   
 
  ],
  imports: [
    CommonModule,
    RoomListRoutingModule,
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    BreadcrumbModule ,
    DialogModule,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    DropdownModule,
    CheckboxModule,
    ReactiveFormsModule
  ]
})
export class RoomListModule { }
