import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proprietaire-modal-detail',
  templateUrl: './proprietaire-modal-detail.component.html',
  styles: [
  ]
})
export class ProprietaireModalDetailComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public proprietaire: any){}

  ngOnInit(): void {
  }
}
