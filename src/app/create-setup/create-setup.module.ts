import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSetupPageRoutingModule } from './create-setup-routing.module';

import { CreateSetupPage } from './create-setup.page';
import { TemplateSelectionComponent } from '../components/template-selection/template-selection.component';
import { ButtonSelectionComponent } from '../components/button-selection/button-selection.component';
import { ButtonConfigComponent } from '../components/button-config/button-config.component';
import { HomeHeaderOptionsComponent } from '../components/home-header-options/home-header-options.component';
import { HomeHeaderConfigComponent } from '../components/home-header-config/home-header-config.component';
import { ScreenSaverConfigComponent } from '../components/screen-saver-config/screen-saver-config.component';
import { HomeContentOptionsComponent } from '../components/home-content-options/home-content-options.component';
import { IntermediateConfigComponent } from '../components/intermediate-config/intermediate-config.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSetupPageRoutingModule,
  ],
  declarations: [
    CreateSetupPage,
    TemplateSelectionComponent,
    ButtonSelectionComponent,
    ButtonConfigComponent,
    HomeHeaderOptionsComponent,
    HomeHeaderConfigComponent,
    ScreenSaverConfigComponent,
    HomeContentOptionsComponent,
    IntermediateConfigComponent,
  ],
})
export class CreateSetupPageModule {}
