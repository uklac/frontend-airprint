import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.scss']
})
export class FrameContainerComponent implements OnInit {
	@Input() url: string | undefined;
	styleFrame = {};

  constructor() { }

  ngOnInit(): void {
		if (this.url) {
			this.styleFrame = {
				'background': `url(http://tumodaurbana.com/wp-content/uploads/2013/05/tumodaurbana-expo-dali.jpg)`,
				'border-image': `url(${this.url}) 200 stretch`
			}
		}
  }

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['url'] && !changes['url'].firstChange){
      const {colorFrame: { currentValue } } = changes;
			this.styleFrame = {
				'background': `url(http://tumodaurbana.com/wp-content/uploads/2013/05/tumodaurbana-expo-dali.jpg)`,
				'border-image': `url(${currentValue}) 200 stretch`
			}
    }
	}

}
