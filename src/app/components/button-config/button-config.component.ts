import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { SetupContextService } from 'src/app/services/setup-context/setup-context-service';

@Component({
  selector: 'app-button-config',
  standalone: false,
  templateUrl: './button-config.component.html',
  styleUrls: ['./button-config.component.scss'],
})
export class ButtonConfigComponent {
  private fb = inject(UntypedFormBuilder);
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
    borderRadius: ['40', [Validators.required, Validators.min(0)]],
  });

  private addTextControls() {
    this.form.addControl(
      'textBgColor',
      this.fb.control('#2f2f', [
        Validators.required,
        Validators.pattern(/^#([0-9A-F]{3}){1,2}$/i),
      ])
    );
    this.form.addControl(
      'textColor',
      this.fb.control('#2f2f24', [
        Validators.required,
        Validators.pattern(/^#([0-9A-F]{3}){1,2}$/i),
      ])
    );
    this.form.addControl(
      'fontStyle',
      this.fb.control('normal', Validators.required)
    );
    this.form.addControl(
      'textPositionHorizontal',
      this.fb.control('center', Validators.required)
    ),
      this.form.addControl(
        'textPositionVertical',
        this.fb.control('center', Validators.required)
      );
  }

  private addImageControls() {
    this.form.addControl(
      'imageBgColor',
      this.fb.control({ value: 'transparent', disabled: true }, [
        Validators.required,
      ])
    );
  }

  private textImageControls() {
    this.form.addControl(
      'textImageBgColor',
      this.fb.control({ value: 'transparent', disabled: true }, [
        Validators.required,
      ])
    );
    this.form.addControl(
      'textColor',
      this.fb.control('#2f2f24', [
        Validators.required,
        Validators.pattern(/^#([0-9A-F]{3}){1,2}$/i),
      ])
    );
    this.form.addControl(
      'fontStyle',
      this.fb.control('normal', Validators.required)
    );
    this.form.addControl(
      'textPositionHorizontal',
      this.fb.control('center', Validators.required)
    ),
      this.form.addControl(
        'textPositionVertical',
        this.fb.control('center', Validators.required)
      );
  }

  ngOnInit() {
    let buttontype = this.setupContextService.getStepForm<any>('buttonType');
    if (buttontype) {
      switch (buttontype) {
        case 'text-only':
          this.addTextControls();

          break;
        case 'image-only':
          this.addImageControls();

          break;
        case 'textImage':
          this.textImageControls();
          break;
        default:
          this.textImageControls();
      }
    }
    let data = this.setupContextService.getStepForm<any>('buttonConfig');
    if (data) {
      console.log(data);
      this.form.patchValue(data);
      console.log(this.form.value);
    }
  }

  save() {
    this.setupContextService.setStepForm(
      'buttonConfig',
      this.form.getRawValue()
    );
  }
}
