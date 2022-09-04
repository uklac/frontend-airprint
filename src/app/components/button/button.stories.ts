// Button.stories.ts

import { Meta, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonMolly',
  component: ButtonComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Button',
    primary: true,
  },
});