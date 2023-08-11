import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { User } from 'src/app/store/user/user.model';
import { AddUser, UpdateUser } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-form-pro',
  templateUrl: './form-pro.component.html',
  styles: [
  ]
})
export class FormProComponent implements OnInit {
  userForm!: FormGroup;
  isSubmitting!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: { user: User },
    public dialog: MatDialogRef<FormProComponent>,
    private userService: UsersService,
    private toastr: ToastrService,
    private store: Store,
  ) { }

  ngOnInit(): void { this.userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],

  })
  if(this.data && this.data.user){
    const user = this.data.user;
    this.userForm.patchValue({
      firstName: user.firstName,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: '',
    })
  }
  }

  // créer les users
  onSubmit(){

    const userObject = {
      firstName: this.userForm.value.firstName,
      name: this.userForm.value.firstName + this.userForm.value.lastName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      phoneNumber: this.userForm.value.phoneNumber,
      password: this.userForm.value.password,
    }

    if(this.userForm.invalid){
      console.log("invalid")
      return;
    }

    this.isSubmitting = true;
    if(!this.data.user){
      this.store.dispatch(new AddUser(userObject)).subscribe(
        (res) => {
          this.toastr.success('user ajouté avec succès', 'Succès');
          this.closeDialog();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de l\'ajout du user', 'Erreur');
          console.log(err);
        }
      );
      this.isSubmitting = false;
    }else{
      this.store.dispatch(new UpdateUser(this.data.user.id, userObject)).subscribe(
        (res) => {
          this.toastr.success('user modifié avec succès', 'Succès');
          this.closeDialog();
        },
        (err) => {
          this.toastr.error('Une erreur est survenue lors de la modification du user', 'Erreur');
          console.log(err);
        }
      )
      console.log("update")
      this.isSubmitting = false;
    }
  }

  closeDialog(): void{
    this.dialog.close()
  }

}
