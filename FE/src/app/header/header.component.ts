import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isIn = false;// store state
  toggleMobileMenu() { // click handler
    this.isIn = !this.isIn;
  }

  constructor() {

  }

  ngOnInit() {

  }

}
