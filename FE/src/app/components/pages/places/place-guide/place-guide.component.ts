import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'place-guide',
  templateUrl: './place-guide.component.html',
  styleUrls: ['./place-guide.component.css']
})
export class PlaceGuideComponent implements OnInit {
  lat: number = 50.4501;
  lng: number = 30.5234;
  constructor() { }

  ngOnInit() {
  }

}
