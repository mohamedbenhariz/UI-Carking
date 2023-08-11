import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DECLARATION, DeclarationsService } from 'src/app/services/declarations.service';
import { DeclarationsComponent } from 'src/app/shared/components/declarations/declarations.component';
import { DeclarationState } from 'src/app/store';
import { GetDeclaration } from 'src/app/store/declaration/declaration.action';
import { FormDeclarationComponent } from './form-declaration/form-declaration.component';

export enum ActionModal {

  Add = 'Add',
  Delete = 'Delete',
  Details = 'Details',
  Edit = 'Edit'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  @Select(DeclarationState.selectStateData) declaration$!: Observable<DECLARATION[]>; //ici nous allons recuperer les données
  isLoading$: boolean = false;
  declaration: any;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private declarationService: DeclarationsService,
  ) {}

  openDialog(type: string, declaration: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this.dialog.open(FormDeclarationComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this.dialog.open(FormDeclarationComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {declaration: declaration}
        })
        break;
      case ActionModal.Delete:
        this.dialog.open(FormDeclarationComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this.dialog.open(FormDeclarationComponent, {
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
      this.store.dispatch(new GetDeclaration())
      this.isLoading$ = false
      
      // Utilisez l'observable pour surveiller les changements
      this.declaration$.subscribe(declaration => {
        this.declaration = declaration;
      });
    }, 2000)
  }
}
