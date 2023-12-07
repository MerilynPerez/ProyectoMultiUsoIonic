import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicarMultaPage } from './aplicar-multa.page';

describe('AplicarMultaPage', () => {
  let component: AplicarMultaPage;
  let fixture: ComponentFixture<AplicarMultaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AplicarMultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
