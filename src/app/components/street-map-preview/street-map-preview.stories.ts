import { Story, Meta } from '@storybook/angular/types-6-0';
import { StreetMapPreviewComponent } from './street-map-preview.component';
import { moduleMetadata } from '@storybook/angular';
import { FrameContainerComponent } from '../frame-container/frame-container.component';

export default {
  title: 'StreetMap',
  component: StreetMapPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [FrameContainerComponent],
      imports: [],
    })
  ],
	argTypes: {
		headline: { control: 'text' },
		divider: 	{ control: 'text' },
		tagline: 	{ control: 'text' },
		urlFrame: {
			control: 'select',
			options: [
				'https://fotoneac.com/wp-content/uploads/2021/03/NW-e1618505478124.jpg',
				'https://st2.depositphotos.com/1040018/6351/i/600/depositphotos_63513719-stock-photo-black-wood-wall-background.jpg'
			]
		},
	}
} as Meta;

const Template: Story<StreetMapPreviewComponent> = (args: StreetMapPreviewComponent) => ({
  props: args,
});

export const Basic = Template.bind({});

Basic.args = {
	headline: 'NEW YORK',
	divider: 'MAP OF MANHATTAN',
	tagline: 'UNITED STATES',
	textStyle: 'basic',
	configuration: {
		styleUrl: 'mapbox://styles/molly98/cl8kmtw6t000u15s4p140knkm',
		poster: {
			background: '#f7f7f7',
			text: 'black',
		}
	},
	urlFrame: 'https://st2.depositphotos.com/1040018/6351/i/600/depositphotos_63513719-stock-photo-black-wood-wall-background.jpg',
	mapboxToken: ''
};


