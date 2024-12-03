import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'facility-list', loadChildren: () => import('./facility-list/facility-list.module').then(m => m.FacilityListModule) },
    { path: 'facility-create', loadChildren: () => import('./facility-create/facility-create.module').then(m => m.FacilityCreateModule) },
])],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
