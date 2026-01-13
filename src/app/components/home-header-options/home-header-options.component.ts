import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-home-header-options',
  standalone: false,
  templateUrl: './home-header-options.component.html',
  styleUrls: ['./home-header-options.component.scss'],
})
export class HomeHeaderOptionsComponent implements SetupStep {
  private fb = inject(FormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({ headerType: ['', Validators.required] });

  ngOnInit() {
    let data = this.setupContextService.getStepForm<any>('headerType');
    if (data) {
      console.log(data);
      this.form.patchValue({ headerType: data });
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm(
      'headerType',
      this.form.value.headerType
    );
  }
}
