import { Story, Meta } from '@storybook/angular/types-6-0';
import { SignaturePosterPreviewComponent } from './signature-poster-preview.component';
import { moduleMetadata } from '@storybook/angular';
import { FrameContainerComponent } from '../frame-container/frame-container.component';

export default {
  title: 'Signature Poster',
  component: SignaturePosterPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [FrameContainerComponent],
      imports: [],
    })
  ]
} as Meta;

export const Basic: Story = () => ({
  props: {
    headline: 'Carmen Medina',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E'
  },
});

