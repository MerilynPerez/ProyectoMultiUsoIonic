import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaConductorPage } from './consulta-conductor.page';

describe('ConsultaConductorPage', () => {
  let component: ConsultaConductorPage;
  let fixture: ComponentFixture<ConsultaConductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultaConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
