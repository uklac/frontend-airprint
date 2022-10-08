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
					{ color: '#d7a9a9', title: 'Palo rosa' },
					{ color: '#2c4a62', title: 'Marinero' },
					{ color: '#778575', title: 'Moss' },
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

