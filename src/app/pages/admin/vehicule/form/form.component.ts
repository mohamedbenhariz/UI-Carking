import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehiculesService } from 'src/app/services/vehicules.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { Vehicule } from 'src/app/store/vehicule/vehicule.model';
import { AddVehicule, UpdateVehicule } from 'src/app/store/vehicule/vehicule.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  vehiculeForm!: FormGroup;
  isSubmitting!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormComponent>,
    private vehiculeService: VehiculesService,
    private toastr: ToastrService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.vehiculeForm = this.formBuilder.group({
      marque: ['', Validators.required],
      matricule: ['', Validators.required],
      chassis: ['', Validators.required],
      couleur: ['', Validators.required],
    })
    if(this.data && this.data.vehicule){
      const vehicule = this.data.vehicule;
      this.vehiculeForm.patchValue({
        marque: vehicule.marque,
        matricule: vehicule.matricule,
        chassis: vehicule.chassis,
        couleur: vehicule.couleur
      })
    }
  }

  //create immeuble
  onSubmit(){

    const vehiculeObject = {
      marque: this.vehiculeForm.value.marque,
      matricule: this.vehiculeForm.value.matricule,
      chassis: this.vehiculeForm.value.chassis,
      couleur: this.vehiculeForm.value.couleur,
    }

    if(this.vehiculeForm.invalid){
      return;
    }

    this.isSubmitting = true;
    if(!this.data.vehicule){
      this.store.dispatch(new AddVehicule(vehiculeObject)).subscribe(
        (res) => {
          this.closeDialog();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de l\'ajout du vehicule', 'Erreur');
          console.log(err);
        }
      );
      this.isSubmitting = false;
    }else{
      this.store.dispatch(new UpdateVehicule(this.data.vehicule.id, vehiculeObject)).subscribe(
        (res) => {
          this.closeDialog();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de la modification du vehicule', 'Erreur');
          console.log(err);
        }
      )
      this.isSubmitting = false;
    }
  }

  closeDialog(): void{
    this.dialog.close()
  }
}
