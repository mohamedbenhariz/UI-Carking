import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/env/env';

export class USERS {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  phoneNumber!: string;
  matricule!: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Get all users use observable
  getAllUsers(): Observable<USERS[]> {
    return this.http.get<USERS[]>(`${baseUrl.localUrl}/users`)
  }

  // Get user by id use observable
  getUserById(id: string): Observable<USERS[]> {
    return this.http.get<USERS[]>(`${baseUrl.localUrl}/users/${id}`)
  }

  // Create new user use observable
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${baseUrl.localUrl}/users`, user)
  }
}
