import { TestBed } from '@angular/core/testing';

import { CloudReaderService } from './cloud-reader.service';

describe('CloudReaderService', () => {
  let service: CloudReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
