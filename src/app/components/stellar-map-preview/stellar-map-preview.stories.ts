import { Story, Meta } from '@storybook/angular/types-6-0';
import { StellarMapPreviewComponent } from './stellar-map-preview.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Maps',
  component: StellarMapPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ]
} as Meta;

export const Stellar: Story = () => ({
  props: {
    city: 'PARIS',
    country: 'FRANCE',
    date: 'SEPTEMBER 10TH 2019',
    coordinates: '48.856 N / 2.3522`E',
  },
});
