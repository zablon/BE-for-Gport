import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isIn = false;

  constructor() {

  }

  toggleMobileMenu() {
    this.isIn = !this.isIn;
  }


  ngOnInit() {

  }

}
