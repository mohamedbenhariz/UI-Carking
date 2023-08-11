import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Store, Select } from '@ngxs/store';
import { Vehicule } from 'src/app/store/vehicule/vehicule.model';
import { Observable } from 'rxjs';
import { UserState, VehiculeState } from 'src/app/store';
import { GetVehicule } from 'src/app/store/vehicule/vehicule.action';
import { GetUser } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponentHome implements OnInit {
  @Select(VehiculeState.selectStateData) vehicules$!: Observable<Vehicule[]>;
  @Select(UserState.selectStateData) user$!: Observable<any>;
  vehicules: any;
  users: any;
  
  declarationForm!: FormGroup;
  isSubmitting!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormComponentHome>,
    private toastr: ToastrService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.declarationForm = this.formBuilder.group({
      dateEntre: [''],
      typeDelaration: [''],
      vehicule: [''],
      proprietaire: [''],
    })
    if(this.data && this.data.declaration){
      const declaration = this.data.declaration;
      this.declarationForm.patchValue({
        dateEntre: declaration.dateEntre,
        typeDelaration: declaration.typeDelaration,
        vehicule: declaration.vehicule,
        proprietaire: declaration.proprietaire
      })
    }

    this.store.dispatch(new GetVehicule())
      this.vehicules$.subscribe(vehicules => {
        this.vehicules = vehicules;
      });

      //user
      this.store.dispatch(new GetUser())
      this.user$.subscribe(users => {
        this.users = users;
      });
  }

  onSubmit(){}
}
