import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-button-selection',
  standalone: false,
  templateUrl: './button-selection.component.html',
  styleUrls: ['./button-selection.component.scss'],
})
export class ButtonSelectionComponent implements SetupStep {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({ buttonType: ['', Validators.required] });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('buttonType');
    if (data) {
      console.log(data);
      this.form.patchValue({ buttonType: data });
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm(
      'buttonType',
      this.form.value.buttonType
    );
  }
}
