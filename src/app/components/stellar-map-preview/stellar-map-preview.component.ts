import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stellar-map-preview',
  templateUrl: './stellar-map-preview.component.html',
  styleUrls: ['./stellar-map-preview.component.scss']
})
export class StellarMapPreviewComponent implements OnInit {
  @Input() city="";
  @Input() country="";
  @Input() date="";
  @Input() coordinates="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
