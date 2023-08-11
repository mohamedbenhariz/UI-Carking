import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeclarationState, UserState, VehiculeState } from 'src/app/store';
import { Declaration } from 'src/app/store/declaration/declaration.model';
import { ActionModal } from '../vehicule/vehicule.component';
import { GetDeclaration } from 'src/app/store/declaration/declaration.action';
import { Vehicule } from 'src/app/store/vehicule/vehicule.model';
import { GetVehicule } from 'src/app/store/vehicule/vehicule.action';
import { GetUser } from 'src/app/store/user/user.action';
import { FormComponentHome } from './form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @Select(DeclarationState.selectStateData) declaration$!: Observable<Declaration[]>;
  @Select(VehiculeState.selectStateData) vehicule$!: Observable<Vehicule[]>;
  @Select(UserState.selectStateData) user$!: Observable<any>;
  isLoading$: boolean = false;

  declarations: any;
  vehicules: any;
  users: any;
  vehiculeNumber!: any;
  userNumber!: any;
  declarationNumber!: any;
  
  historics: any[] = [
    {
      id: 1,
      title: "Vehicules",
      quantity: this.vehiculeNumber,
      icon: "vehicule"
    },
    {
      id: 2,
      title: "Proprietaires",
      quantity: this.userNumber,
      icon: "agent"
    },
    {
      id: 3,
      title: "Declarations",
      quantity: this.declarationNumber,
      icon: "agent"
    },
    {
      id: 4,
      title: "Documents",
      quantity: 42,
      icon:"doc"
    }
  ]

  constructor(
    public dialog: MatDialog,
    private store: Store,
  ) { }

  openDialog(type: string, declaration: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this.dialog.open(FormComponentHome, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this.dialog.open(FormComponentHome, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {declaration: declaration}
        })
        break;
      case ActionModal.Delete:
        this.dialog.open(FormComponentHome, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this.dialog.open(FormComponentHome, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {declaration: declaration}
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
      this.store.dispatch(new GetDeclaration())
      this.store.dispatch(new GetVehicule())
      this.store.dispatch(new GetUser())
      this.isLoading$ = false
      // Utilisez l'observable pour surveiller les changements
      this.declaration$.subscribe(declarations => {
        this.declarations = declarations;
        this.declarationNumber = this.declarations.length;
        this.updateHistorics();
      });

      //vehicule
      this.vehicule$.subscribe(vehicules => {
        this.vehicules = vehicules;
        this.vehiculeNumber = this.vehicules.length;
        this.updateHistorics();
      });

      //user
      this.user$.subscribe(users => {
        this.users = users;
        this.userNumber = this.users.length;
        this.updateHistorics();
      });
    }, 2000)
  }

  updateHistorics(): void {
    this.historics[0].quantity = this.vehiculeNumber;
    this.historics[1].quantity = this.userNumber;
    this.historics[2].quantity = this.declarationNumber;
  }
}
