import { FormGroup } from '@angular/forms';

export interface SetupStep {
  form: FormGroup;
  save(): void;
}
