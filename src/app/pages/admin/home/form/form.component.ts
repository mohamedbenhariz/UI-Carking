import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store, Select } from '@ngxs/store';
import { Vehicule } from 'src/app/store/vehicule/vehicule.model';
import { Observable } from 'rxjs';
import { UserState, VehiculeState } from 'src/app/store';
import { GetVehicule } from 'src/app/store/vehicule/vehicule.action';
import { GetUser } from 'src/app/store/user/user.action';
import { AddDeclaration, UpdateDeclaration } from 'src/app/store/declaration/declaration.action';

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

  typeDeclarationData = [
    {
      value: 'entree',
      label: 'Entrée'
    },
    {
      value: 'sortie',
      label: 'Sortie'
    }
  ]

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
      typeDeclaration: [''],
      vehicule: [''],
      proprietaire: [''],
    })
    if(this.data && this.data.declaration){
      const declaration = this.data.declaration;
      this.declarationForm.patchValue({
        dateEntre: declaration.dateEntre,
        typeDeclaration: declaration.typeDeclaration,
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

  formatDate(date:any){
    if(!date) return ''
    const today = new Date(date);
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1; // Months start at 0!
    let dd: any = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = mm + '-' + dd + '-' + yyyy;
    return formattedToday
}

  onSubmit(){
    const declarationObject = {
      dateEntre: this.formatDate(this.declarationForm.value.dateEntre),
      typeDeclaration: this.declarationForm.value.typeDeclaration,
      userId: this.declarationForm.value.proprietaire,
      vehiculeId: this.declarationForm.value.vehicule,
    }

    if(this.declarationForm.invalid){
      return;
    }

    this.isSubmitting = true;
    if(!this.data.declaration){
      console.log(declarationObject)
      this.store.dispatch(new AddDeclaration(declarationObject)).subscribe(
        (res) => {
          this.dialog.close();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de l\'ajout de la declaration', 'Erreur');
          console.log(err);
        }
      );
      this.isSubmitting = false;
    }else{
      this.store.dispatch(new UpdateDeclaration(this.data.declaration.id, declarationObject)).subscribe(
        (res) => {
          this.dialog.close();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de la modification de la declaration', 'Erreur');
          console.log(err);
        }
      )
      this.isSubmitting = false;
    }
  }
}
