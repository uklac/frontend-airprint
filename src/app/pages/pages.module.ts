import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StellarMapPageComponent } from './stellar-map-page/stellar-map-page.component';
import { ComponentsModule } from '../components/components.module';

const components = [
	StellarMapPageComponent
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
