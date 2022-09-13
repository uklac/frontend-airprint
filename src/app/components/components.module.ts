import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MaterialModule} from '../material.module';
import { HeaderComponent } from './header/header.component';
import { StellarMapPreviewComponent } from './stellar-map-preview/stellar-map-preview.component';
import { StreetMapPreviewComponent } from './street-map-preview/street-map-preview.component';
import { StellarMapConfigurationPanelComponent } from './stellar-map-configuration-panel/stellar-map-configuration-panel.component';


const components = [   
	ButtonComponent,
	HeaderComponent,
  StellarMapPreviewComponent,
  StreetMapPreviewComponent,
  StellarMapConfigurationPanelComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: components,
})
export class ComponentsModule { }
