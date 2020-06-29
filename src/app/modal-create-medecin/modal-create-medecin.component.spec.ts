import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateMedecinComponent } from './modal-create-medecin.component';

describe('ModalCreateMedecinComponent', () => {
  let component: ModalCreateMedecinComponent;
  let fixture: ComponentFixture<ModalCreateMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
