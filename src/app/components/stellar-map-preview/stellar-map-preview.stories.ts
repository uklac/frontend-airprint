import { Story, Meta } from '@storybook/angular/types-6-0';
import { StellarMapPreviewComponent } from './stellar-map-preview.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Stellar Maps',
  component: StellarMapPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ]
} as Meta;

export const JapanStyle: Story = () => ({
  props: {
    city: 'TOKIO',
    country: 'JAPAN',
    date: 'SEPTEMBER 10TH 2019',
    coordinates: '48.856 N / 2.3522`E',
    style: {
      globe: '#D2001A',
      background: '#EFEFEF',
      text: '#182731',
    }
  },
});

export const ClassicStyle: Story = () => ({
  props: {
    city: 'PARIS',
    country: 'FRANCE',
    date: 'SEPTEMBER 10TH 2019',
    coordinates: '48.856 N / 2.3522`E',
    style: {
      globe: '#b9dccd',
      background: '#EFEFEF',
      text: '#182731',
    }
  },
});
