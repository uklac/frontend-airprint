import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeStellarMap } from 'src/app/models/theme-stellar';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})
export class SelectThemeComponent implements OnInit {
  @Input() themes: Array<ThemeStellarMap> = [];
  @Output() onSelectTheme = new EventEmitter<ThemeStellarMap>();

	selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

	selectTheme(theme: ThemeStellarMap, index: number) {
		this.selectedIndex = index;
		this.onSelectTheme.emit(theme);
	}

}
