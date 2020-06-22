import { ModalConfirmDialogComponent } from './../modal-confirm-dialog/modal-confirm-dialog.component';
import { ModalEditMedecinComponent } from './../modal-edit-medecin/modal-edit-medecin.component';
import { MedecinService } from './../medecin.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
  medecins: any;

  constructor(private medecinService: MedecinService, private modalService: NgbModal) { 
    medecinService.findAll()
    .subscribe(res=>{
      console.log(res);
      this.medecins = res;
    },
    err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  editMedecin(med){
    const modalRef = this.modalService.open(ModalEditMedecinComponent);
    modalRef.componentInstance.medecin = med;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      //code maj
      console.log(receivedEntry);
      this.medecinService.saveOrUpdate(receivedEntry)
      .subscribe(res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      });
    });
  }

  remove(med: any){
    const modalRef = this.modalService.open(ModalConfirmDialogComponent);
    modalRef.componentInstance.title = 'SUPPRESSION D\'UN MEDECIN';
    modalRef.componentInstance.content = 'Etes-vous sur de vouloir supprimer le medecin [' + med.matricule + ']';
    modalRef.componentInstance.passEntry.subscribe(() => {
      this.medecinService.delete(med.id)
      .subscribe(res => {
        const pos = this.medecins.indexOf(med);
        this.medecins.splice(pos, 1);
      },
      err=>{
        console.log(err);
      });
    });
  }

}
