import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PropsStellarPoster } from 'src/app/models/props-stellar-poster';
import { ThemeStellarMap } from 'src/app/models/theme-stellar';

@Component({
  selector: 'app-stellar-map-configuration-panel',
  templateUrl: './stellar-map-configuration-panel.component.html',
  styleUrls: ['./stellar-map-configuration-panel.component.scss']
})
export class StellarMapConfigurationPanelComponent implements OnInit {
  @Input() themes: Array<ThemeStellarMap> = [];
  @Output() formChange = new EventEmitter<PropsStellarPoster>();
  @Output() themeChange = new EventEmitter<ThemeStellarMap>();
  @Output() enableConstellations = new EventEmitter<boolean>();
  @Output() enableConstellationsNames = new EventEmitter<boolean>();
  @Output() enableGrid = new EventEmitter<boolean>();

  panelOpenState = true;
	stellarForm : PropsStellarPoster = {
		lat: '',
		long: '',
		date: '',
		headline: '',
		divider: '',
		tagline: '',
		sublime: '',
	}

  constructor() { }

  ngOnInit(): void {
  }

	addToCart() {
		console.log('added!');
	}

	updateMap() {
		this.formChange.emit(this.stellarForm);
	}

	selectTheme(theme: ThemeStellarMap) {
		this.themeChange.emit(theme);
	}

	showConstellations(ev: any) {
		const { checked } = ev;
		this.enableConstellations.emit(checked);
	}

	showGrid(ev: any) {
		const { checked } = ev;
		this.enableGrid.emit(checked);
	}

	showConstellationsNames(ev: any) {
		const { checked } = ev;
		this.enableConstellationsNames.emit(checked);
	}
}
