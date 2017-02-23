import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/upload/';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});

  constructor() { }

  ngOnInit() {
    // Add in the other upload form parameters.
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('folder', 'ukraine/kherson/gport');
      form.append('PlaceId', '1');
    };
  }
}
