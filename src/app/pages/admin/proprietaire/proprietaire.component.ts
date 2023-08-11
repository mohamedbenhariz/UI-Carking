import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { USERS, UsersService } from 'src/app/services/users.service';
import { UserState } from 'src/app/store';
import { GetUser } from 'src/app/store/user/user.action';
import { Select, Store } from '@ngxs/store';
import { FormProComponent } from './form-pro/form-pro.component';

export enum ActionModal {
  Add = 'Add',
  Delete = 'Delete',
  Details = 'Details',
  Edit = 'Edit'
}

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styles: [
  ]
})
export class ProprietaireComponent implements OnInit {
  @Select(UserState.selectStateData) users$!: Observable<USERS[]>; //ici nous allons recuperer les données
  isLoading$: boolean = false;
  users: any;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private userService: UsersService,
  ) {}

  openDialog(type: string, user: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this.dialog.open(FormProComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this.dialog.open(FormProComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {user: user}
        })
        break;
      case ActionModal.Delete:
        this.dialog.open(FormProComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this.dialog.open(FormProComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      default:
        break;

    }
  }


  ngOnInit(): void {
    this.isLoading$ = true
    setTimeout(() => {
      //dispatch data
      this.store.dispatch(new GetUser())
      this.isLoading$ = false
      // Utilisez l'observable pour surveiller les changements
      this.users$.subscribe(users => {
        this.users = users;
      });
    }, 2000)
  }
  onSubmit(){
  }

  proprietaires: any[] = [
    {
      image: '',
      firstname: 'Yimga',
      lastname: 'Erika',
      email: 'E. Genie logiciel'
    },
    {
      image: '',
      firstname: 'Ketchemen',
      lastname: 'Dalia',
      email: 'Gestion SI'
    },
    {
      image: '',
      firstname: 'Wouapi',
      lastname: 'Maeva',
      email: 'Reseau'
    },
    {
      image: '',
      firstname: 'Ngassam',
      lastname: 'Mayron',
      email: "E. Genie logiciel II"
    },
    {
      image: '',
      firstname: 'Feupouo',
      lastname: 'Laureen',
      email: 'Dev'
    },
    {
      image: '',
      firstname: 'Jazet',
      lastname: ' Ange',
      email: 'Comptabilité'
    },
    {
      image: '',
      firstname: 'Josué',
      lastname: 'Nguemo',
      email: 'Securité'
    },
  ]
}
