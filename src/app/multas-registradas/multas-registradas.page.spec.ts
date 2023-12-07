import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultasRegistradasPage } from './multas-registradas.page';

describe('MultasRegistradasPage', () => {
  let component: MultasRegistradasPage;
  let fixture: ComponentFixture<MultasRegistradasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultasRegistradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
