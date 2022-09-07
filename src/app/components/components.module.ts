import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MaterialModule} from '../material.module';
const components = [ButtonComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: components,
})
export class ComponentsModule { }
