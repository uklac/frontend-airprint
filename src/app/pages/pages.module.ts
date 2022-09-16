import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { StellarMapPageComponent } from './stellar-map-page/stellar-map-page.component';
import { ErrorPageComponent } from './error-page/error-page.component'

const components = [
	StellarMapPageComponent,
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
