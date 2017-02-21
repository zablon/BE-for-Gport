import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Search } from '../app.models';

@Component({
  selector: 'app-main-filter',
  templateUrl: './main-filter.component.html',
  styleUrls: ['./main-filter.component.css']
})
export class MainFilterComponent implements OnInit {

  public searchForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      place: new FormControl(""),
      date_start: new FormControl(""),
      date_end: new FormControl("")
    });
  }

  search({ value, valid }: { value: Search, valid: boolean }) {
    if(valid) {
      this.onChange.emit(value);
    }
  }

  @Output() onChange:EventEmitter<Search> = new EventEmitter();
}
