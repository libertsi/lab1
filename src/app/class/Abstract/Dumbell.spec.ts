import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dumbell } from './Dumbbell';

describe('Javelin testing', () => {
  let dumbell:Dumbell;

  beforeEach(() => {
    dumbell = new Dumbell("Dumbell", 12, "metal", false);
  });

  it('should create', () => {
    expect(dumbell).toBeTruthy();
  });

  it('calc weight', () => {
    expect(dumbell.calcWeight()).toBe(24);
  });
  
});
