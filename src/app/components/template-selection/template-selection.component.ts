import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-template-selection',
  standalone: false,
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.scss'],
})
export class TemplateSelectionComponent implements SetupStep {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({ template: ['', Validators.required] });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('template');
    if (data) {
      console.log(data);
      this.form.patchValue({ template: data });
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm('template', this.form.value.template);
  }
}
