import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:RoomListComponent },
])],
  exports: [RouterModule]
})
export class RoomListRoutingModule { }
