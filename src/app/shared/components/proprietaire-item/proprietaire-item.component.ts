import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { ProprietaireModalDetailComponent } from './proprietaire-modal-detail/proprietaire-modal-detail.component';

@Component({
  selector: 'app-proprietaire-item',
  templateUrl: './proprietaire-item.component.html',
  styles: [
  ]
})
export class ProprietaireItemComponent implements OnInit {
  
    @Input() proprietaire: any;

    constructor(private dialog: MatDialog) { }
  
    ngOnInit(): void {
    }

    viewDetails(){
      this.dialog.open(ProprietaireModalDetailComponent, {
        data: this.proprietaire
      })
    }
}
