import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : any = {
    email: null,
    password: null
  }
  LoginService: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form)
    this.LoginService.login(this.form).subscribe(
      (data: any) => console.log(data.access_token),
      (err: any) => console.log(err)
    )
  }
}
