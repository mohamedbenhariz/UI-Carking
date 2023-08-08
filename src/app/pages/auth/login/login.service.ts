import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login_url = "http://localhost:5000/api/v1/auth/login";

  constructor(private http: HttpClient) { }

  login(credentials: any): any{
    return this.http.post(this.login_url, credentials)
    }
  }
