import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityCreateComponent } from './facility-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:FacilityCreateComponent },
])],
  exports: [RouterModule]
})
export class FacilityCreateRoutingModule { }
