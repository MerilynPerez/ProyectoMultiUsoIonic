import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarifarioMultasPage } from './tarifario-multas.page';

describe('TarifarioMultasPage', () => {
  let component: TarifarioMultasPage;
  let fixture: ComponentFixture<TarifarioMultasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarifarioMultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
