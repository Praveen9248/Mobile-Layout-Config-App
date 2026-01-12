import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSetupPage } from './create-setup.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSetupPageRoutingModule {}
