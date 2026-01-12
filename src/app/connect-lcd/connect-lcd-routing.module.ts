import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectLcdPage } from './connect-lcd.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectLcdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectLcdPageRoutingModule {}
