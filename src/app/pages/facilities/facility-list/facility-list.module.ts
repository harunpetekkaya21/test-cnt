import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityListRoutingModule } from './facility-list-routing.module';
import { FacilityListComponent } from './facility-list.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FacilityListComponent
  ],
  imports: [
    CommonModule,
    FacilityListRoutingModule,
    TableModule,
    TagModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    HttpClientModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule ,
    TableModule,
    FormsModule
  ]
})
export class FacilityListModule { }
