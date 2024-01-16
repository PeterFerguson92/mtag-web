import { TestBed } from '@angular/core/testing';

import { VolunteerHelperService } from './volunteer-helper.service';

describe('VolunteerHelperService', () => {
  let service: VolunteerHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
