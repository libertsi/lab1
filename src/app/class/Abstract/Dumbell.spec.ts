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

  
  it('calc weight with adjustment', () => {
    dumbell = new Dumbell("Dumbell", 12, "metal", true);
    expect(dumbell.calcWeight()).toBe(24);
  });
  
  it('calc weight with adjustment and material', () => {
    dumbell = new Dumbell("Dumbell", 12, "Metal", true);
    expect(dumbell.calcWeight()).toBe(24);
  });
  
  
});
