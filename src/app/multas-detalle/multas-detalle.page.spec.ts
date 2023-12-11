import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultasDetallePage } from './multas-detalle.page';

describe('MultasDetallePage', () => {
  let component: MultasDetallePage;
  let fixture: ComponentFixture<MultasDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
