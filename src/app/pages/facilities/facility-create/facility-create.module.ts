import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from "primeng/inputtextarea";
import { FacilityCreateRoutingModule } from './facility-create-routing.module';
import { FacilityCreateComponent } from './facility-create.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FacilityCreateComponent
  ],
  imports: [
    CommonModule,
    FacilityCreateRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    TooltipModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class FacilityCreateModule { }
