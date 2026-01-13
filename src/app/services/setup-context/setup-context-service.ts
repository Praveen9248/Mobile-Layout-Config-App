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

  private stepForms = signal<Record<string, any>>({});

  setStepForm(stepKey: string, value: any) {
    this.stepForms.update((prev) => ({ ...prev, [stepKey]: value }));
  }

  getStepForm<T>(stepKey: string): T | null {
    return this.stepForms()[stepKey] ?? null;
  }

  goToNextStep() {
    if (this.currentStepIdx() < this.steps.length - 1) {
      this.currentStepIdx.update((i) => i + 1);
      console.log(this.currentStepIdx());
      console.log(this.stepForms());
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

  reset() {
    this.currentStepIdx.set(0);
    this.stepForms.set({});
  }
}
