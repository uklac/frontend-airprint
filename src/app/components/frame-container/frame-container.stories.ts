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
		url: 'https://fotoneac.com/wp-content/uploads/2021/03/NW-e1618505478124.jpg'
  }
});

