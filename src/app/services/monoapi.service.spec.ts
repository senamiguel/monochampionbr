import { TestBed } from '@angular/core/testing';

import { MonoapiService } from './monoapi.service';

describe('MonoapiService', () => {
  let service: MonoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
