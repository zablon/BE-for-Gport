import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Search } from '../../../app.models';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearch(searchData: Search) {
    console.log(searchData);
  }

  onScrolledFilters($event) {
    this.onShowFiltersInHeader.emit($event);
  }

  @Output() onShowFiltersInHeader: EventEmitter<boolean> = new EventEmitter();

}
