import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-home-content-options',
  standalone: false,
  templateUrl: './home-content-options.component.html',
  styleUrls: ['./home-content-options.component.scss'],
})
export class HomeContentOptionsComponent implements SetupStep {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({ contentType: ['', Validators.required] });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('contentType');
    if (data) {
      console.log(data);
      this.form.patchValue({ contentType: data });
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm(
      'contentType',
      this.form.value.contentType
    );
  }
}
