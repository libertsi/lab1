import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('sum of x = -0.2', () => {
    let x = -0.2;
    let y = -0.2231;
    let y2 = service.getTab(x);
    let y1 = y2.get(x)
    expect(y.toFixed(2)).toBe(y1.toFixed(2)); 
  }
  );
});
