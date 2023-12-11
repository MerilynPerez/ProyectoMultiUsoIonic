import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultasListaPage } from './multas-lista.page';

describe('MultasListaPage', () => {
  let component: MultasListaPage;
  let fixture: ComponentFixture<MultasListaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultasListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
