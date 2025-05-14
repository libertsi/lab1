import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Javelin } from './Javelin';

describe('Javelin testing', () => {
  let javelin:Javelin;

  beforeEach(() => {
    javelin = new Javelin("Javelin", 12, "metal", 3);
  });

  it('should create', () => {
    expect(javelin).toBeTruthy();
  });

  it('should be error', () => {
    expect(() => new Javelin("Javelin", -2, "metal", 3)).toThrow(new Error('вага не може бути менша за 0'));
  });

  it('should be error', () => {
    expect(() => new Javelin("Javelin", 2, "metal", -3)).toThrow(new Error('довжина не може бути менша за 0'));
  });
  
  it('calc weight', () => {
    expect(javelin.calcWeight()).toBe(12);
  });
});
