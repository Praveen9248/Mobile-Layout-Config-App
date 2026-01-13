import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-home-header-config',
  standalone: false,
  templateUrl: './home-header-config.component.html',
  styleUrls: ['./home-header-config.component.scss'],
})
export class HomeHeaderConfigComponent implements SetupStep {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({
    height: [
      80,
      [Validators.required, Validators.min(40), Validators.max(200)],
    ],
    backgroundColor: [
      '#2f2f2f',
      [Validators.required, Validators.pattern(/^#([0-9A-F]{3}){1,2}$/i)],
    ],
    borderRadius: [0, [Validators.required, Validators.min(0)]],
    textPosition: ['center', Validators.required],
    fontStyle: ['normal', Validators.required],
  });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('headerConfig');
    if (data) {
      console.log(data);
      this.form.patchValue(data);
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm('headerConfig', this.form.value);
  }
}
