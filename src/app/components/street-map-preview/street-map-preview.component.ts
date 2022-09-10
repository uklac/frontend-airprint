import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-street-map-preview',
  templateUrl: './street-map-preview.component.html',
  styleUrls: ['./street-map-preview.component.scss']
})
export class StreetMapPreviewComponent implements OnInit {
  @Input() city="";
  @Input() country="";
  @Input() coordinates="";
  @Input() mapFrom="";
  @Input() style="";

  constructor() { }

  ngOnInit(): void {
  }

}
