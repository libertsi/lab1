import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dumbell } from './Dumbbell';

describe('Dumbell testing', () => {
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
  
  it('should be error', () => {
    expect(() => new Dumbell("Dumbell", -2, "metal", false)).toThrow(new Error('вага не може бути менша за 0'));
  });

  
});
