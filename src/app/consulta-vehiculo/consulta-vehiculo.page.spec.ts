import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaVehiculoPage } from './consulta-vehiculo.page';

describe('ConsultaVehiculoPage', () => {
  let component: ConsultaVehiculoPage;
  let fixture: ComponentFixture<ConsultaVehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultaVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
