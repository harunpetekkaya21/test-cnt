import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractListRoutingModule } from './contract-list-routing.module';
import { ContractListComponent } from './contract-list.component';


@NgModule({
  declarations: [
    ContractListComponent
  ],
  imports: [
    CommonModule,
    ContractListRoutingModule
  ]
})
export class ContractListModule { }
