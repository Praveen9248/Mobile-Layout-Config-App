import {
  Component,
  ComponentRef,
  computed,
  effect,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SetupCodeMap } from '../mappings/setup-mapping';
import { SetupContextService } from '../services/setup-context/setup-context-service';
import { Router } from '@angular/router';
import { SetupStep } from '../interfaces/setup-step';

@Component({
  selector: 'app-create-setup',
  standalone: false,
  templateUrl: './create-setup.page.html',
  styleUrls: ['./create-setup.page.scss'],
})
export class CreateSetupPage {
  setupContextService = inject(SetupContextService);
  router = inject(Router);

  currentStepIndex = computed(() => this.setupContextService.currentStepIdx());

  @ViewChild('setupHost', { read: ViewContainerRef })
  vSetup!: ViewContainerRef;

  vSetupRef?: ComponentRef<any>;
  private viewReady = false;

  constructor() {
    effect(() => {
      this.setupContextService.currentStepIdx();
      if (!this.viewReady) return;
      this.loadComponent();
    });
  }
  ngAfterViewInit() {
    this.viewReady = true;
    this.loadComponent();
  }

  loadComponent() {
    let currComponent =
      SetupCodeMap[this.setupContextService.steps[this.currentStepIndex()]];
    if (!currComponent) return;
    this.vSetup.clear();
    this.vSetupRef = this.vSetup.createComponent(currComponent);
  }

  handleNextStep() {
    const instance = this.vSetupRef?.instance as SetupStep;

    if (instance?.form?.invalid) {
      instance.form.markAllAsTouched();
      return;
    }

    instance?.save();
    this.setupContextService.goToNextStep();
  }

  handleBackStep() {
    this.vSetupRef?.instance?.save?.();
    this.setupContextService.goToPrevStep();
  }

  onCancel() {
    this.router.navigate(['home']);
    this.setupContextService.reset();
  }

  onSubmit() {
    this.router.navigate(['home']);
    this.setupContextService.currentStepIdx.set(0);
  }
}
