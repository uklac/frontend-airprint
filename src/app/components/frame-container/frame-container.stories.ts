import { Story, Meta } from '@storybook/angular/types-6-0';
import { FrameContainerComponent } from './frame-container.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Frame',
  component: FrameContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ]
} as Meta;

export const Basic: Story = () => ({
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

