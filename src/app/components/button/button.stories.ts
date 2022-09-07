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

export const Primary: Story = () => ({
  props: {
    color: 'primary',
    text: 'Accept',
  },
});

export const Accent: Story = () => ({
  props: {
    color: 'warn',
    text: 'Decline',
  },
});

export const List: Story = () => ({
  props: {
    color: 'warn',
    text: 'Decline',
  },
  template:`
  <app-button >
    one
  </app-button >
  <app-button >
    two
  </app-button >
  `

});

