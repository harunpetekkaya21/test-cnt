import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityListComponent } from './facility-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:FacilityListComponent },
])],
  exports: [RouterModule]
})
export class FacilityListRoutingModule { }
