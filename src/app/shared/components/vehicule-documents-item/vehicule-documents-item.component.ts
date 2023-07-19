import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicule-documents-item',
  templateUrl: './vehicule-documents-item.component.html',
  styles: [
  ]
})
export class VehiculeDocumentsItemComponent {
  @Input() documents: any[] = [];
  selectDocument: any;

  selectDocumentMethod(document: any){
    this.selectDocument = document;
  }
}
