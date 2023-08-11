import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/env/env';
import { BehaviorSubject } from 'rxjs';

export class USERS {
  id!: number;
  firstName!: string;
  name!: string;
  lastName!: string;
  email!: string;
  phoneNumber!: string;
  matricule!: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
    this.fetchCurrentUser();
  }

  private currentUserSubject: BehaviorSubject<USERS | null> = new BehaviorSubject<USERS | null>(null);
  currentUser$: Observable<USERS | null> = this.currentUserSubject.asObservable();

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

  //Update user 
  updateUser(id:string, user:string): Observable<any> {
    return this.http.put<any>(`${baseUrl.localUrl}/users/update/${id}`, user)
}

//Delete user
  deleteUser(id: string): Observable<USERS[]>{
    return this.http.delete<USERS[]>(`${baseUrl.localUrl}/users/${id}`)
}

  private fetchCurrentUser() {
    // Fetch the current user's data using an API call or any other method
    // Example:
    this.http.get<any>(`${baseUrl.localUrl}/users/login/current`).subscribe(
      (user: any) => {
        console.log('Fetched current user:', user);
        this.currentUserSubject.next(user);
      },
      (error) => {
        console.error('Error fetching current user:', error);
      }
    );
  }
}
