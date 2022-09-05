// Button.stories.ts

import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'ButtonMolly',
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
    label: 'Button',
    primary: true,
  },
});
