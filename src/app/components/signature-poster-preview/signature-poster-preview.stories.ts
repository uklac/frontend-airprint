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
  ],
	argTypes: {
		background: {
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
				]
      }
		},
		fontColor: {
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
				]
      }
		},
		fullSize: { control: 'boolean' },
	}
} as Meta;

const Template: Story<SignaturePosterPreviewComponent> = (args: SignaturePosterPreviewComponent) => ({
  props: args,
});

export const Basic = Template.bind({});

Basic.args = {
  headline: 'Carmen Medina',
  tagline: 'SEPTEMBER 10TH 2019',
  sublime: '48.856 N / 2.3522`E'
};

