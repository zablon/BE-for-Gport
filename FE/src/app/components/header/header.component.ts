import { Component, OnInit, Input } from '@angular/core';
import { GlobalStoreService } from '../../shared/global-store.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  private isIn = false;

  constructor(private globalStoreService: GlobalStoreService) {

  }

  get showFilters() {
    return this.globalStoreService.displayHeaderFilters;
  }

  toggleMobileMenu() {
    this.isIn = !this.isIn;
  }


  ngOnInit() {

  }

}
