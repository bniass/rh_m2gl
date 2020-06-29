import { MedecinService } from './../medecin.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-medecin-list-pdf',
  templateUrl: './medecin-list-pdf.component.html',
  styleUrls: ['./medecin-list-pdf.component.css']
})
export class MedecinListPdfComponent implements OnInit {

  medecins: any;
  @ViewChild('htmlData') htmlData: ElementRef;
  constructor(private medecinService: MedecinService) { 
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

  openPDF(){
      const DATA = this.htmlData.nativeElement;
      html2canvas(DATA).then((canvas)=>{
        console.log(this.htmlData.nativeElement);
        const imgData = canvas.toDataURL('image/png');
        const doc = new jspdf();
        const imageHeight = canvas.height * 208 / canvas.width;
        doc.addImage(imgData, 0, 0, 208, imageHeight);
        //doc.output('dataurlnewwindow');
        doc.save('medecin.pdf')
      });
    }
  
  

}
