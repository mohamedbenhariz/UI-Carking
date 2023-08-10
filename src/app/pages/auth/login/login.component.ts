import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

class User {
  email!: string;
  password!: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isSubmitting!: boolean;

  hide = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Vérification du domaine de l'e-mail
    if (!email.endsWith('@myiuc.com')) {
      alert('Veuillez utiliser une adresse e-mail de type @myiuc.com');
      this.isSubmitting = false;
      return;
    }

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    
    this.authService.login(user).subscribe(
      (res: User | any) => {
        this.authService.setToken(res.data);
        this.isSubmitting = false;
        this.router.navigate(['/admin']);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}
