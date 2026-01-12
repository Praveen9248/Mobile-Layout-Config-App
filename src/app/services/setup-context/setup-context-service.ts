import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SetupContextService {
  currentStepIdx = signal(0);

  steps = [
    'TEMPLATE',
    'BUTTON',
    'BUTTON_CONFIG',
    'HEADER',
    'HEADER_CONFIG',
    'CONTENT',
    'SCREEN_SAVER',
    'INTERMEDIATE',
  ];

  flowConfig = signal<any>({});

  goToNextStep() {
    if (this.currentStepIdx() < this.steps.length - 1) {
      this.currentStepIdx.update((i) => i + 1);
      console.log(this.currentStepIdx());
      return;
    }
    return;
  }

  goToPrevStep() {
    if (this.currentStepIdx() > 0) {
      this.currentStepIdx.update((i) => i - 1);
      console.log(this.currentStepIdx());
      return;
    }
    return;
  }
}
