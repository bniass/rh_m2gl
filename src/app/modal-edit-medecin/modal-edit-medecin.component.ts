import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  } from 'protractor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit-medecin',
  templateUrl: './modal-edit-medecin.component.html',
  styleUrls: ['./modal-edit-medecin.component.css']
})
export class ModalEditMedecinComponent implements OnInit {

  @Input() public medecin;
  @Output() public passEntry = new EventEmitter<any>();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  update(){
    this.passEntry.emit(this.medecin);
    this.activeModal.close();
  }

}
