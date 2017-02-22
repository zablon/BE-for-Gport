import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});

  constructor() { }

  ngOnInit() {
  }

}
