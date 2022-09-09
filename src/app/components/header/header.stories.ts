import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from './header.component';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule} from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';

export default {
    title: 'Header',
    component: HeaderComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [MatIconModule,
									MatBadgeModule],
      })
    ]
  } as Meta;

  export const Basic: Story = () => ({
    props: {
      links: [
        {
					link:"https://www.mapiful.com/starmap-editor/#/editor",
					title:"Products"
				},
				{
					link:"https://docs.angular.lat/tutorial/toh-pt3",
					title:"Inspiration"
				},
				{
					link:"https://www.yoseomarketing.com/blog/crear-hipervinculos-html-links-enlaces/",
					title:"Magazine"
				},
				{
					link:"https://www.yoseomarketing.com/blog/crear-hipervinculos-html-links-enlaces/",
					title:"About"
				}
      ]
    },
  
  });



