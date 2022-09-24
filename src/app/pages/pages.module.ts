import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { StellarMapPageComponent } from './stellar-map-page/stellar-map-page.component';
import { ErrorPageComponent } from './error-page/error-page.component'
import { GeometricPostersPagesComponent } from './geometric-posters-pages/geometric-posters-pages.component'

const components = [
	StellarMapPageComponent,
	GeometricPostersPagesComponent,
  ErrorPageComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: components,
})
export class PagesModule { }
