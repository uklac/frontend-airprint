import { Component, OnInit } from '@angular/core';
import { PropsStellarPoster } from 'src/app/models/props-stellar-poster';
import { ThemeStellarMap } from 'src/app/models/theme-stellar';

@Component({
  selector: 'app-stellar-map-page',
  templateUrl: './stellar-map-page.component.html',
  styleUrls: ['./stellar-map-page.component.scss']
})
export class StellarMapPageComponent implements OnInit {
	style: { globe: string; background: string; text: string; } | undefined;

  constructor() { }

	themes: Array<ThemeStellarMap> = [];

	poster = {
    headline: 'TOKIO',
    divider: 'JAPAN',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E',
  }

  ngOnInit(): void {
		this.themes = [
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/modern.jpg",
				title:"Modern",
				style: {
					globe: '#b9dccd',
					background: '#EFEFEF',
					text: '#182731'
				}
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/asphalt.jpg",
				title:"Japan",
				style: {
					globe: '#e63946',
					background: '#EFEFEF',
					text: '#182731'
				}
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title:"Forest",
				style: {
					globe: '#3a5a40',
					background: '#dad7cd',
					text: '#182731'
				}
			},
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title:"Spacial",
				style: {
					globe: '#023047',
					background: '#8ecae6',
					text: '#182731'
				}
			}
		]

		this.style = this.themes[2].style;
  }

	updatePoster(props: PropsStellarPoster) {
		this.poster = props;
	}

	updateGlobe(style: any) {
		this.style = style;
		console.log('this.style: ', style);
	}
}
