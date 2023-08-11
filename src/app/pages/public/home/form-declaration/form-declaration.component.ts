import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { DeclarationsService } from 'src/app/services/declarations.service';
import { AddDeclaration, UpdateDeclaration } from 'src/app/store/declaration/declaration.action';

@Component({
  selector: 'app-form-declaration',
  templateUrl: './form-declaration.component.html',
  styles: [
  ]
})
export class FormDeclarationComponent implements OnInit {

  declarationForm!: FormGroup;
  isSubmitting!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormDeclarationComponent>,
    private declarationService: DeclarationsService,
    private toastr: ToastrService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.declarationForm = this.formBuilder.group({
      dateEntre: ['', Validators.required],
      typeDeclaration: ['', Validators.required],
    })
    if(this.data && this.data.declaration){
      const declaration = this.data.declaration;
      console.log(declaration)
      this.declarationForm.patchValue({
        dateEntre: declaration.dateEntre,
        typeDeclaration: declaration.typeDeclaration,
      })
    }
  }

  //create immeuble
  onSubmit(){

    const declarationObject = {
      dateEntre: this.declarationForm.value.dateEntre,
      typeDeclaration: this.declarationForm.value.typeDeclaration,
    }

    if(this.declarationForm.invalid){
      return;
    }

    this.isSubmitting = true;
    if(!this.data.declaration){
      this.store.dispatch(new AddDeclaration(declarationObject)).subscribe(
        (res) => {
          this.closeDialog();
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
          this.closeDialog();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de la modification du declaration', 'Erreur');
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
