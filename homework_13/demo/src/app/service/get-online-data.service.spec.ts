import { TestBed } from '@angular/core/testing';

import { GetOnlineDataService } from './get-online-data.service';

describe('GetOnlineDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetOnlineDataService = TestBed.get(GetOnlineDataService);
    expect(service).toBeTruthy();
  });
});
