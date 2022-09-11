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

const classicColors = {
  globe: '#b9dccd',
  background: '#EFEFEF',
  text: '#182731',
};

export const ClassicStyle: Story = () => ({
  props: {},
  styles: [
    `
    .main-container {
      background:#c7c7c7;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .wrapper-map {
      width: 400px;
      height: 500px
    }
    `
  ],
  template:`
    <div class="main-container">
      <div class="wrapper-map">
        <app-stellar-map-preview
          city="PARIS"
          country="FRANCE"
          date="SEPTEMBER 10TH 2019"
          coordinates="48.856 N / 2.3522 E"
          style="${`classicColors`}"
        >
        </app-stellar-map-preview>
      </div>
    </div>
  `
});

export const DarkStyle: Story = () => ({
  props: {
    city: 'PARIS',
    country: 'FRANCE',
    date: 'SEPTEMBER 10TH 2019',
    coordinates: '48.856 N / 2.3522`E',
    style: {
      globe: '#2B2B2B',
      background: '#171010',
      text: '#EDEDED',
    }
  },
});
