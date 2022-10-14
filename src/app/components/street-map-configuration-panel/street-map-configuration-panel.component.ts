import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PropsStreetPoster } from 'src/app/models/props-street-poster';
import { ThemeStreetMap } from 'src/app/models/theme-street';
import { Frame } from 'src/app/models/frame';

@Component({
	selector: 'app-street-map-configuration-panel',
	templateUrl: './street-map-configuration-panel.component.html',
	styleUrls: ['./street-map-configuration-panel.component.scss'],
})
export class StreetMapConfigurationPanelComponent implements OnInit {
	@Input() themes: Array<ThemeStreetMap> = [];
	@Input() frames: Array<Frame> = [];
	@Input() textStyle: Array<String> = [];
	@Output() formChange = new EventEmitter<PropsStreetPoster>();
	@Output() themeChange = new EventEmitter<ThemeStreetMap>();
	@Output() styleTextChange = new EventEmitter<string>();
	@Output() frameChange = new EventEmitter<Frame>();

	panelOpenState = false;

	streetForm: PropsStreetPoster = {
		city: '',
		headline: '',
		divider: '',
		tagline: '',
		textStyle: 'basic',
	};

	textStyles = ['basic', 'lineal', 'shadow', 'bottom'];

	constructor() {}

	ngOnInit(): void {}

	updateMap() {
		this.formChange.emit(this.streetForm);
	}

	selectTheme(theme: ThemeStreetMap) {
		this.themeChange.emit(theme);
	}

	styleTextChanged(style: string) {
		this.styleTextChange.emit(style);
	}

	selectFrame(frame: Frame) {
		this.frameChange.emit(frame);
	}
}
