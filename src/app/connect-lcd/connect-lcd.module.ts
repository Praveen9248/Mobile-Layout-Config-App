import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectLcdPageRoutingModule } from './connect-lcd-routing.module';

import { ConnectLcdPage } from './connect-lcd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectLcdPageRoutingModule,
  ],
  declarations: [ConnectLcdPage],
})
export class ConnectLcdPageModule {}
