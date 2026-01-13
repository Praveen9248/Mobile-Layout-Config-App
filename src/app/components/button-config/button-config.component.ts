import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-button-config',
  standalone: false,
  templateUrl: './button-config.component.html',
  styleUrls: ['./button-config.component.scss'],
})
export class ButtonConfigComponent {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({
    width: [
      300,
      [Validators.required, Validators.min(200), Validators.max(600)],
    ],
    height: [
      200,
      [Validators.required, Validators.min(200), Validators.max(600)],
    ],
    backgroundColor: [
      '#2f2f2f',
      [Validators.required, Validators.pattern(/^#([0-9A-F]{3}){1,2}$/i)],
    ],
    borderRadius: ['40', [Validators.required, Validators.min(0)]],
    textPositionHorizontal: ['center', [Validators.required]],
    textPositionVertical: ['center', [Validators.required]],
    fontStyle: ['normal', [Validators.required]],
  });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('buttonConfig');
    if (data) {
      console.log(data);
      this.form.patchValue(data);
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm('buttonConfig', this.form.value);
  }
}
