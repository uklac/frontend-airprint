import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material.module';
import { StellarMapPreviewComponent } from './stellar-map-preview/stellar-map-preview.component';
import { StreetMapPreviewComponent } from './street-map-preview/street-map-preview.component';
import { SignaturePosterPreviewComponent } from './signature-poster-preview/signature-poster-preview.component';
import { FrameContainerComponent } from './frame-container/frame-container.component';

const components = [
  StellarMapPreviewComponent,
  StreetMapPreviewComponent,
	SignaturePosterPreviewComponent,
	FrameContainerComponent,
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
