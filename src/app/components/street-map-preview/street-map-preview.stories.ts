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
		mapboxToken: 	{
			name: 'Mapbox token',
			description: 'get a token from your account',
			control: { type: 'text'}
		},
		urlFrame: {
			name: "Type of Frame",
			control: 'select',
			options: [
				'https://fotoneac.com/wp-content/uploads/2021/03/NW-e1618505478124.jpg',
				'https://st2.depositphotos.com/1040018/6351/i/600/depositphotos_63513719-stock-photo-black-wood-wall-background.jpg',
				'https://st.depositphotos.com/1761693/1946/i/600/depositphotos_19460577-stock-photo-wooden-texture-white-wooden-background.jpg',
				null
			]
		},
		styleMapUrl: {
			name: "Map Style",
			control: 'select',
			options: [
				'mapbox://styles/molly98/cl8kmtw6t000u15s4p140knkm',
				'mapbox://styles/molly98/cl8kn16ml001o15mim9pwerw2',
				'mapbox://styles/molly98/cl8knaa6w001014mpchwbs57l',
				'mapbox://styles/molly98/cl8kn4un6000y14t9wo8peex8',
				'mapbox://styles/molly98/cl8knlyuf002t15pcy08xxaow',
			]
		},
		textStyle: {
			name: "Position Text",
			control: 'select',
			options: [
				'basic',
				'shadow',
				'lineal',
				'bottom'
			]
		},
		posterBackground: {
			name: "Poster Background",
			control: {
        type: 'color',
				presetColors: [
					{
						title: "Nieve",
						color: '#f7f7f7',
					},
					{
						title: "Antaño",
						color: '#eac99f',
					},
					{
						title: "Noche",
						color: 'black',
					}
				]
      }
		},
		posterColorText: {
			name: "Color Text",
			control: {
        type: 'color',
				presetColors: [
					{"title": "Midnight", "color": "#181718"},
					{"title": "Smoke", "color": "#666a70"},
					{"title": "Puddle", "color": "#919ea1"},
					{"title": "Concrete", "color": "#e0dfde"},
					{"title": "White", "color": "#ffffff"},
					{"title": "Moody", "color": "#294b62"},
					{"title": "Ocean", "color": "#749ebb"},
					{"title": "Escape", "color": "#9bbdc8"},
					{"title": "Seafog", "color": "#bfcdcd"},
					{"title": "Botanica", "color": "#26544f"},
					{"title": "Harbour", "color": "#417479"},
					{"title": "Moss", "color": "#809480"},
					{"title": "Pistachio", "color": "#c3dac3"},
					{"title": "Sea Salt", "color": "#ccd4c9"},
					{"title": "Whisper", "color": "#ebeee9"},
					{"title": "Berry", "color": "#8d0f42"},
					{"title": "Amore", "color": "#c96b67"},
					{"title": "Salmon", "color": "#ca8683"},
					{"title": "Rose", "color": "#e3b5b4"},
					{"title": "Blush", "color": "#e0d0c9"},
					{"title": "Tutu", "color": "#f5e0df"},
					{"title": "Terracotta", "color": "#ba704a"},
					{"title": "Coral", "color": "#f6bead"},
					{"title": "Peach", "color": "#fddac4"},
					{"title": "Honeypot", "color": "#ca932f"},
					{"title": "Latte", "color": "#d8c8b5"},
					{"title": "Linen", "color": "#e9e5dc"},
					{"title": "Noche", "color": "black"},
				]
      }
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
	styleMapUrl: 'mapbox://styles/molly98/cl8kmtw6t000u15s4p140knkm',
	posterBackground: '#f7f7f7',
	posterColorText: 'black',
	urlFrame: 'https://st2.depositphotos.com/1040018/6351/i/600/depositphotos_63513719-stock-photo-black-wood-wall-background.jpg',
	mapboxToken: '',
	latitude: 40.71427,
	longitude: -74.00597,
};


