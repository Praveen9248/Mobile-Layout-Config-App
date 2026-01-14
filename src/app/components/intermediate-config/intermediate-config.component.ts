import { Component, computed, inject, signal } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-intermediate-config',
  standalone: false,
  templateUrl: './intermediate-config.component.html',
  styleUrls: ['./intermediate-config.component.scss'],
})
export class IntermediateConfigComponent implements SetupStep {
  private fb = inject(UntypedFormBuilder);
  private setupContextService = inject(SetupContextService);

  templateType = computed(() => {
    let type = this.setupContextService.getStepForm('template');
    console.log(type);
    return type;
  });

  form = this.fb.group({
    template: ['', Validators.required],
    backgroundType: ['', Validators.required],
  });

  private addBackgroundColorControl() {
    this.form.addControl(
      'backgroundColor',
      this.fb.control('#f2ff', [Validators.required])
    );
  }

  private addBackgroundImageControl() {
    this.form.addControl(
      'backgroundImage',
      this.fb.control('', [Validators.required])
    );
  }

  ngOnInit() {
    let flag = this.setupContextService.getStepForm<any>('template');
    if (flag !== 'nested') {
      this.form.disable();
      return;
    }
    let data = this.setupContextService.getStepForm<any>('intermediateInfo');
    if (data) {
      if (data.backgroundType === 'backgroundImage') {
        this.addBackgroundImageControl();
      } else if (data.backgroundType === 'backgroundColor') {
        this.addBackgroundColorControl();
      }
      this.form.patchValue(data);
    }

    this.form.get('backgroundType')!.valueChanges.subscribe((type) => {
      this.form.removeControl('backgroundImage');
      this.form.removeControl('backgroundColor');
      if (type === 'backgroundImage') {
        this.addBackgroundImageControl();
      } else if (type === 'backgroundColor') {
        this.addBackgroundColorControl();
      }
    });
  }

  save() {
    this.setupContextService.setStepForm('intermediateInfo', this.form.value);
  }
}
