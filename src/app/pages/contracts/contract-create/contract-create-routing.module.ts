import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractCreateComponent } from './contract-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:ContractCreateComponent },
])],
  exports: [RouterModule]
})
export class ContractCreateRoutingModule { }
