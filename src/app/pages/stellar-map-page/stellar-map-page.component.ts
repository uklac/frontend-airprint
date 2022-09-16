import { Component, OnInit } from '@angular/core';
import { PropsStellarPoster } from 'src/app/models/props-stellar-poster';
import { ThemeStellarMap } from 'src/app/models/theme-stellar';

@Component({
  selector: 'app-stellar-map-page',
  templateUrl: './stellar-map-page.component.html',
  styleUrls: ['./stellar-map-page.component.scss']
})
export class StellarMapPageComponent implements OnInit {

  constructor() { }

	themes: Array<ThemeStellarMap> = [];

	poster = {
    headline: 'TOKIO',
    divider: 'JAPAN',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E'
  }

  ngOnInit(): void {
		this.themes = [
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
  }

	updatePoster(props: PropsStellarPoster) {
		this.poster = props;
	}

}
