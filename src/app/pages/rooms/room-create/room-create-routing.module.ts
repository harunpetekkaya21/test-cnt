import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCreateComponent } from './room-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:RoomCreateComponent },
])],
  exports: [RouterModule]
})
export class RoomCreateRoutingModule { }
