import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMedecinComponent } from './modal-edit-medecin.component';

describe('ModalEditMedecinComponent', () => {
  let component: ModalEditMedecinComponent;
  let fixture: ComponentFixture<ModalEditMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
