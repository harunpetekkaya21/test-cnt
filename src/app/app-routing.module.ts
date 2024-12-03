import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin.layout.component';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot([
    {
        path: '', component: AdminLayoutComponent,
         children: [
          { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
           { path: 'facility', loadChildren: () => import('./pages/facilities/facilities.module').then(m => m.FacilitiesModule) },
           { path: 'room', loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule) },
           { path: 'contract', loadChildren: () => import('./pages/contracts/contracts.module').then(m => m.ContractsModule) },
           // { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
           // { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
           // { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            //{ path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
        ]
    },
    // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    // { path: 'notfound', component: NotfoundComponent },
    // { path: '**', redirectTo: '/notfound' },
], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
