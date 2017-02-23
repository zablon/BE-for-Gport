/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalStoreService } from './global-store.service';

describe('HeaderFilterDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalStoreService]
    });
  });

  it('should ...', inject([GlobalStoreService], (service: GlobalStoreService) => {
    expect(service).toBeTruthy();
  }));
});
