import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-airprint';

	tabs = [
		{
			link: '/',
			title: 'Home'
		},
		{
			link: '/',
			title: 'Street Maps'
		},
		{
			link: '/stellar-editor',
			title: 'Stellar Maps'
		}
	]
}
