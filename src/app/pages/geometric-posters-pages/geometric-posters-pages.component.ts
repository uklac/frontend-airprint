import { Component, OnInit } from '@angular/core';

interface Category {
	key: string;
	name: string;
}

@Component({
  selector: 'app-geometric-posters-pages',
  templateUrl: './geometric-posters-pages.component.html',
  styleUrls: ['./geometric-posters-pages.component.scss']
})
export class GeometricPostersPagesComponent implements OnInit {

  constructor() { }

	categorySelected = '';

	defaultProps = {
		headline: 'MARCEL BREURER',
    phrase: 'Designer from 1995',
    style: {
      background: '#EFEFEF',
      text: '#182731'
    }
	}

	categories: Array<Category> = [
		{
			key: 'bauhaus',
			name: 'Bauhaus'
		},
		{
			key: 'pattern',
			name: 'Patterns'
		}
	]

  ngOnInit(): void {
  }

	onSelectCategory(category: Category) {
		debugger
		this.categorySelected = category.key
	}
}
