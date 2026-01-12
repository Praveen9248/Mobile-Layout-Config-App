import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  router = inject(Router);
  layoutConfigurationStatus = false;

  activeLCD = {
    deviceId: 'LCD_SOLUM123',
    deviceName: 'SoluM-LCD-32',
  };

  onCreateClick() {
    this.router.navigate(['create-setup']);
  }

  onAddLcdClick() {
    this.router.navigate(['connect-lcd']);
  }
}
