import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaMultasPage } from './mapa-multas.page';

describe('MapaMultasPage', () => {
  let component: MapaMultasPage;
  let fixture: ComponentFixture<MapaMultasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaMultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
