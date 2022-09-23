import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from './footer.component';
import { moduleMetadata } from '@storybook/angular';

export default {
	title: 'Footer',
	component: FooterComponent,
	decorators: [
		moduleMetadata({
			declarations: [],
			imports: [],
		})
	]
} as Meta;

export const FooterPage: Story = () => ({
	props: {
		links: [
			{
				url: "https://www.mapiful.com/starmap-editor/#/editor",
				title: "Quality"
			},
			{
				url: "https://docs.angular.lat/tutorial/toh-pt3",
				title: "FAQ"
			},
			{
				url: "https://www.yoseomarketing.com/blog/crear-hipervinculos-html-links-enlaces/",
				title: "Contact"
			}
		]
	}
});