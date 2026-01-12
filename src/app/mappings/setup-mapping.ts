import { ButtonConfigComponent } from '../components/button-config/button-config.component';
import { ButtonSelectionComponent } from '../components/button-selection/button-selection.component';
import { HomeContentOptionsComponent } from '../components/home-content-options/home-content-options.component';
import { HomeHeaderConfigComponent } from '../components/home-header-config/home-header-config.component';
import { HomeHeaderOptionsComponent } from '../components/home-header-options/home-header-options.component';
import { IntermediateConfigComponent } from '../components/intermediate-config/intermediate-config.component';
import { ScreenSaverConfigComponent } from '../components/screen-saver-config/screen-saver-config.component';
import { TemplateSelectionComponent } from '../components/template-selection/template-selection.component';

export const SetupCodeMap: Record<any, any> = {
  TEMPLATE: TemplateSelectionComponent,
  BUTTON: ButtonSelectionComponent,
  BUTTON_CONFIG: ButtonConfigComponent,
  HEADER: HomeHeaderOptionsComponent,
  HEADER_CONFIG: HomeHeaderConfigComponent,
  CONTENT: HomeContentOptionsComponent,
  SCREEN_SAVER: ScreenSaverConfigComponent,
  INTERMEDIATE: IntermediateConfigComponent,
};
