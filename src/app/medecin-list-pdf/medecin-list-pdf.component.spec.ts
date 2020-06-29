import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinListPdfComponent } from './medecin-list-pdf.component';

describe('MedecinListPdfComponent', () => {
  let component: MedecinListPdfComponent;
  let fixture: ComponentFixture<MedecinListPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinListPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinListPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
