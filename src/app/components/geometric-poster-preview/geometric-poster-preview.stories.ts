import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeometricPosterPreviewComponent } from './geometric-poster-preview.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Poster',
  component: GeometricPosterPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ]
} as Meta;

export const Geometric: Story = () => ({
  props: {
    headline: 'MARCEL BREURER',
    phrase: 'Designer from 1995',
  },
});
