import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-screen-saver-config',
  standalone: false,
  templateUrl: './screen-saver-config.component.html',
  styleUrls: ['./screen-saver-config.component.scss'],
})
export class ScreenSaverConfigComponent implements SetupStep {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({
    screenSaverStatus: ['', Validators.required],
    screenSaverOpt: ['', Validators.required],
  });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('screenSaver');
    if (data) {
      console.log(data);
      this.form.patchValue(data);
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm('screenSaver', this.form.value);
  }
}
