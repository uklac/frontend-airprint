import { Story, Meta } from '@storybook/angular/types-6-0';
import { SelectThemeComponent } from './select-theme.component';
import { moduleMetadata } from '@storybook/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

export default {
	title: 'Select Theme',
	component: SelectThemeComponent,
	decorators: [
		moduleMetadata({
			declarations: [],
			imports: [
				MatExpansionModule,
				BrowserAnimationsModule,
				MatButtonToggleModule,
				MatSlideToggleModule,
				MatCheckboxModule
			],
		})
	]
} as Meta;

export const Basic: Story = () => ({
	props: {
		themes: [
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/modern.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/asphalt.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title:"Modern"
			}
		]
	},
});
