import { RessourceService } from './../ressource.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-medecin',
  templateUrl: './modal-create-medecin.component.html',
  styleUrls: ['./modal-create-medecin.component.css']
})
export class ModalCreateMedecinComponent implements OnInit {

  valider: boolean;
  @Output() public passEntry = new EventEmitter<any>();
  formMedecin: FormGroup;
  services: any;
  lesspecialites: any;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.valider = false;
    this.formMedecin = this.formBuilder.group({
      matricule:['', Validators.required],
      prenom:['', Validators.required],
      nom:['', Validators.required],
      tel:['', Validators.required],
      adresse:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      datenaissance:['', Validators.required],
      salaire:['', Validators.required],
      service:['', Validators.required],
      specialites:['', Validators.required],
    });

    this.ressourceService.findServices()
    .subscribe(data => {
      this.services = data;
      console.log(data);
    },
    err => {
      console.log(err);
    });


  }

  get f() { return this.formMedecin.controls; }

  onOptionsSelected(serviceId: any){
    this.ressourceService.findSpecialitesByService(serviceId)
    .subscribe(data => {
      this.lesspecialites = data;
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }
  onSubmit(){
    this.valider = true;

    if(this.formMedecin.invalid){
      return;
    }

    this.passEntry.emit(this.formMedecin.value);
    this.activeModal.close();
  }

}
