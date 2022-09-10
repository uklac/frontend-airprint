import { Story, Meta } from '@storybook/angular/types-6-0';
import { StreetMapPreviewComponent } from './street-map-preview.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'StreetMap',
  component: StreetMapPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ]
} as Meta;

export const StreetBasic: Story = () => ({
  props: {
    city: 'New York',
    country: 'EEUU',
    coordinates: '2.9006 / 79.0045',
    mapFrom: '----MAP OF MANHATTAN----',
    style: 'basic'
  },
});

export const StreetShadow: Story = () => ({
    props: {
      city: 'New York',
      country: 'EEUU',
      coordinates: '2.9006 / 79.0045',
      style: 'shadow'
    },
  });

  export const StreetLineal: Story = () => ({
    props: {
      city: 'New York',
      country: 'EEUU',
      coordinates: '2.9006 / 79.0045',
      style: 'lineal'
    },
  });