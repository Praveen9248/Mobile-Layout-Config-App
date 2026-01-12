import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-setup',
    loadChildren: () => import('./create-setup/create-setup.module').then( m => m.CreateSetupPageModule)
  },
  {
    path: 'connect-lcd',
    loadChildren: () => import('./connect-lcd/connect-lcd.module').then( m => m.ConnectLcdPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
