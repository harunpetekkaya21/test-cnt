import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomCreateRoutingModule } from './room-create-routing.module';
import { RoomCreateComponent } from './room-create.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    RoomCreateComponent
  ],
  imports: [
    CommonModule,
    RoomCreateRoutingModule,
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
    InputNumberModule
  ]
})
export class RoomCreateModule { }
