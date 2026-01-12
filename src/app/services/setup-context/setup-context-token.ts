import { InjectionToken } from '@angular/core';
import { SetupContextService } from './setup-context-service';

export const SETUP_CONTEXT = new InjectionToken<SetupContextService>(
  'SETUP_CONTEXT'
);
