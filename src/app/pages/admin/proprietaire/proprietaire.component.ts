import { Component } from '@angular/core';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styles: [
  ]
})
export class ProprietaireComponent {
  proprietaires: any[] = [
    {
      image: '',
      firstname: 'Yimga',
      lastname: 'Erika',
      poste: 'E. Genie logiciel'
    },
    {
      image: '',
      firstname: 'Ketchemen',
      lastname: 'Dalia',
      poste: 'Gestion SI'
    },
    {
      image: '',
      firstname: 'Wouapi',
      lastname: 'Maeva',
      poste: 'Reseau'
    },
    {
      image: '',
      firstname: 'Ngassam',
      lastname: 'Mayron',
      poste: "E. Genie logiciel II"
    },
    {
      image: '',
      firstname: 'Feupouo',
      lastname: 'Laureen',
      poste: 'Dev'
    },
    {
      image: '',
      firstname: 'Jazet',
      lastname: ' Ange',
      poste: 'Comptabilité'
    },
    {
      image: '',
      firstname: 'Josué',
      lastname: 'Nguemo',
      poste: 'Securité'
    },
  ]
}
