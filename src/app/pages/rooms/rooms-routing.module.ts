import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'room-list', loadChildren: () => import('./room-list/room-list.module').then(m => m.RoomListModule) },
    { path: 'room-create', loadChildren: () => import('./room-create/room-create.module').then(m => m.RoomCreateModule) },
])],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
