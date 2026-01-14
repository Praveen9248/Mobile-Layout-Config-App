import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { SetupStep } from 'src/app/interfaces/setup-step';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-home-content-options',
  standalone: false,
  templateUrl: './home-content-options.component.html',
  styleUrls: ['./home-content-options.component.scss'],
})
export class HomeContentOptionsComponent implements SetupStep {
  private fb = inject(UntypedFormBuilder);
  private setupContextService = inject(SetupContextService);

  form = this.fb.group({
    contentType: ['', Validators.required],
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
    let data = this.setupContextService.getStepForm<any>('contentInfo');
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
    console.log(this.form.value);
    this.setupContextService.setStepForm('contentInfo', this.form.value);
  }
}
