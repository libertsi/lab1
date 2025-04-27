import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Barbell } from './Barbell';

describe('Barbell testing', () => {
  let barbell:Barbell;

  beforeEach(() => {
    barbell = new Barbell("Barbell", 32, "metal", 2);
  });

  it('should create', () => {
    expect(barbell).toBeTruthy();
  });

  it('calc weight', () => {
    expect(barbell.calcWeight()).toBe(32);
  });
  
});
