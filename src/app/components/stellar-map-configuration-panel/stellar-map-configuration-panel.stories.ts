import { Story, Meta } from '@storybook/angular/types-6-0';
import { StellarMapConfigurationPanelComponent } from './stellar-map-configuration-panel.component';
import { moduleMetadata } from '@storybook/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export default {
	title: 'StellarConfiguration',
	component: StellarMapConfigurationPanelComponent,
	decorators: [
		moduleMetadata({
			declarations: [],
			imports: [
				MatExpansionModule,
				BrowserAnimationsModule,
				MatButtonToggleModule
			],
		})
	]
} as Meta;

export const StellarConfig: Story = () => ({
	props: {
		maps: [
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
			}
		]
	},
});
