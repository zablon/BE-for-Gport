import { Injectable } from '@angular/core';

@Injectable()
export class GlobalStoreService {
  public displayHeaderFilters: boolean = false;
  constructor() { }
}
