import {Component, Output, EventEmitter, OnInit, ElementRef, Inject} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Search} from '../../app.models';
import OnScrolledDown from '../../shared/on-scolled-down';
import {GlobalStoreService} from '../../shared/global-store.service';

@Component({
  selector: 'app-main-filter',
  templateUrl: 'main-filter.component.html',
  styleUrls: ['main-filter.component.css']
})
export class MainFilterComponent extends OnScrolledDown implements OnInit {

  private searchForm: FormGroup;

  constructor(elRef: ElementRef, @Inject('Window') window: Window, globalStoreService: GlobalStoreService) {
    super(elRef, window, globalStoreService, 'displayHeaderFilters');
  }

  // @HostListener('window:scroll', ['$event'])
  // scrollListener(event) {
  //   let throughForm = false;
  //   if (this.scrolledUnderForm !== throughForm) {
  //     this.scrolledUnderForm = throughForm;
  //     this.onScrolledThrough.emit(throughForm);
  //   }
  // }

  ngOnInit() {
    this.searchForm = new FormGroup({
      place: new FormControl(""),
      date_start: new FormControl(""),
      date_end: new FormControl("")
    });
  }

  search({value, valid}: {value: Search, valid: boolean}) {
    if (valid) {
      this.onChange.emit(value);
    }
  }

  @Output() onChange: EventEmitter<Search> = new EventEmitter();
}
