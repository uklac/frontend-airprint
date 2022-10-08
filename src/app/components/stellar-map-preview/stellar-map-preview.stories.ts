import { Story, Meta } from '@storybook/angular/types-6-0';
import { StellarMapPreviewComponent } from './stellar-map-preview.component';
import { moduleMetadata } from '@storybook/angular';
import { FrameContainerComponent } from '../frame-container/frame-container.component';

export default {
  title: 'Stellar Maps',
  component: StellarMapPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [FrameContainerComponent],
      imports: [],
    })
  ]
} as Meta;

export const JapanStyle: Story = () => ({
  props: {
    headline: 'TOKIO',
    divider: 'JAPAN',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E',
    configuration: {
			background: {
				fill: '#e63946'
			},
			poster: {
				background: '#EFEFEF',
				text: '#182731'
			}
    }
  },
});


export const ClassicStyle: Story = (args) => ({
  props: {
    headline: 'PARIS',
    divider: 'FRANCE',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E',
    configuration: {
			background: {
				fill: '#b9dccd'
			},
			poster: {
				background: '#EFEFEF',
				text: '#182731'
			}
    }
  }
});

export const DarkStyle: Story = () => ({
  props: {
    headline: 'PARIS',
    divider: 'FRANCE',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E',
    configuration: {
			background: {
				fill: '#212529'
			},
			poster: {
				background: '#e9ecef',
				text: '#182731'
			}
    }
  },
});
