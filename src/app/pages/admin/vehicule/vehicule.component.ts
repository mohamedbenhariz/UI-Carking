import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, Select } from '@ngxs/store';
import { VehiculesService } from 'src/app/services/vehicules.service';
import { AddMotoComponent } from 'src/app/shared/components/add-moto/add-moto.component';
import { VehiculeState } from 'src/app/store';
import { GetVehicule } from 'src/app/store/vehicule/vehicule.action';
import { Vehicule } from 'src/app/store/vehicule/vehicule.model';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';

export enum ActionModal {
  Add = 'Add',
  Delete = 'Delete',
  Details = 'Details',
  Edit = 'Edit'
}

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styles: [
  ]
})
export class VehiculeComponent implements OnInit {
  @Select(VehiculeState.selectStateData) vehicules$!: Observable<Vehicule[]>; //ici nous allons recuperer les données
  isLoading$: boolean = false;
  vehicules: any;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private vehiculeService: VehiculesService,
  ) {}

  openDialog(type: string, vehicule: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this.dialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this.dialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {vehicule: vehicule}
        })
        break;
      case ActionModal.Delete:
        this.dialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this.dialog.open(FormComponent, {
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
      this.store.dispatch(new GetVehicule())
      this.isLoading$ = false
      // Utilisez l'observable pour surveiller les changements
      this.vehicules$.subscribe(vehicules => {
        this.vehicules = vehicules;
      });
    }, 2000)
  }
}
