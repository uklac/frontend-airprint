// Button.stories.ts

import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    })
  ]
} as Meta;

export const Buttons: Story = () => ({
  props: {
    color: 'warn',
    text: 'Decline',
  },

  styles: [
    `
    .box {
      padding: 100px;
    }
    
    .box app-button {
      padding-right: 10px;
    }
    `
  ],

  template:`
    <div class="box">
      <app-button >
        Default
       </app-button >

      <app-button color='accent'>
        Primary
      </app-button>

      <app-button>
        Secondary
      </app-button >

      <app-button color='warn'>
        Error
      </app-button >

      <app-button color='disabled'>
        Disabled
      </app-button >
    </div>
  `
});

