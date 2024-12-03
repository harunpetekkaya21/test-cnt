import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'contract-list', loadChildren: () => import('./contract-list/contract-list.module').then(m => m.ContractListModule) },
    { path: 'contract-create', loadChildren: () => import('./contract-create/contract-create.module').then(m => m.ContractCreateModule) },
])],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
