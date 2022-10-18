import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { ComponentsModule } from './components/components.module'

import  { Injector} from '@angular/core';
import { StreetMapPreviewComponent } from './components/street-map-preview/street-map-preview.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, StreetMapPreviewComponent]
})
export class AppModule {
	constructor(private injector: Injector) {
		const el = createCustomElement(StreetMapPreviewComponent, { injector });
		customElements.define('street-map-preview', el);
	}
}
