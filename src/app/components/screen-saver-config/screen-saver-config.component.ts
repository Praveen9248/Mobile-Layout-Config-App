import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-screen-saver-config',
  standalone: false,
  templateUrl: './screen-saver-config.component.html',
  styleUrls: ['./screen-saver-config.component.scss'],
})
export class ScreenSaverConfigComponent implements SetupStep {
  private fb = inject(UntypedFormBuilder);
  private setupContextService = inject(SetupContextService);
  private initialized = false;

  form = this.fb.group({
    screenSaverStatus: ['false', Validators.required],
  });

  private addScreenSaverOptControl() {
    this.form.addControl(
      'screenSaverOpt',
      this.fb.control('', Validators.required)
    );
  }

  private removeScreenSaverOptControl() {
    this.form.removeControl('screenSaverOpt');
  }

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('screenSaver');
    if (data) {
      if (data.screenSaverStatus) {
        this.addScreenSaverOptControl();
      }

      this.form.patchValue(data);
    }

    this.form.get('screenSaverStatus')?.valueChanges.subscribe((enabled) => {
      if (enabled) {
        this.addScreenSaverOptControl();
      } else {
        this.removeScreenSaverOptControl();
      }
    });
  }

  save() {
    this.setupContextService.setStepForm('screenSaver', this.form.value);
  }
}
