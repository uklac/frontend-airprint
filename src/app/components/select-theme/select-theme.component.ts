import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeStellarMap } from 'src/app/models/theme-stellar';
import { ThemeStreetMap } from 'src/app/models/theme-street';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})
export class SelectThemeComponent implements OnInit {
  @Input() themes: Array<ThemeStellarMap | ThemeStreetMap> = [];
  @Output() onSelectTheme = new EventEmitter<ThemeStellarMap | ThemeStreetMap>();

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectTheme(theme: ThemeStellarMap | ThemeStreetMap, index: number) {
    this.selectedIndex = index;
    this.onSelectTheme.emit(theme);
  }

}
