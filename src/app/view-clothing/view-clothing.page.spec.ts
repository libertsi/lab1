import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewClothingPage } from './view-clothing.page';

describe('ViewClothingPage', () => {
  let component: ViewClothingPage;
  let fixture: ComponentFixture<ViewClothingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
