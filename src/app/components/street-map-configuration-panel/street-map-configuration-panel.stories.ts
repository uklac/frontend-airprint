import { Story, Meta } from '@storybook/angular/types-6-0';
import { StreetMapConfigurationPanelComponent } from './street-map-configuration-panel.component';
import { moduleMetadata } from '@storybook/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'

export default {
	title: 'StreetMapConfiguration',
	component: StreetMapConfigurationPanelComponent,
	decorators: [
		moduleMetadata({
			declarations: [],
			imports: [
				MatExpansionModule,
				BrowserAnimationsModule,
				MatButtonToggleModule,
                MatIconModule,
                MatTabsModule
			],
		})
	]
} as Meta;

export const StreetConfig: Story = () => ({
	props: {
		themes: [
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title:"Modern"
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title:"Modern"
			}
		],
        textStyle: [
			"Modern",
			"Classic"
        ],
		frames: [
			{
				url:"https://www.mapiful.com/content/uploads/2019/10/Black-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg",
				titleFrame:"Black"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2019/10/Natural-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg",
				titleFrame:"Natural"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2021/12/White-Wood-Frame-Front-view-in-size-18x24-inches-100x100.jpg",
				titleFrame:"White"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2021/12/White-Wood-Frame-Front-view-in-size-18x24-inches-100x100.jpg",
				titleFrame:"White"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2021/12/White-Wood-Frame-Front-view-in-size-18x24-inches-100x100.jpg",
				titleFrame:"White"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2021/12/White-Wood-Frame-Front-view-in-size-18x24-inches-100x100.jpg",
				titleFrame:"White"
			},
		],
	},
});