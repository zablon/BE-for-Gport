import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: 'header-search.component.html',
  styleUrls: ['header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {
  private isShowSearch = false;

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    document.body.scrollTop > 50 ? this.isShowSearch = true : this.isShowSearch = false;
  }

  constructor() {
  }

  ngOnInit() {

  }

}
