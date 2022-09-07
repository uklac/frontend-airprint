import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color = 'primary'; 
  @Input() text = '';
  
  isDisabled = false;

  constructor() { }

  ngOnInit(): void {

    this.isDisabled = this.color === 'disabled';

  }

}
