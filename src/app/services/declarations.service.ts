import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/env/env';
import { VEHICULES } from './vehicules.service';

export class DECLARATION {
    id!: number;
    dateEntre!: string;
    typeDeclaration!: string;
  }

@Injectable({
    providedIn: 'root'
})
export class DeclarationsService {

    constructor(private http: HttpClient){}

    // Get all declarations use observable
    getAllDeclarations(): Observable<any[]> {
        return this.http.get<any>(`${baseUrl.localUrl}/declarations`)
    }

    // Get declaration by id use observable
    getDeclarationById(id: string): Observable<any> {
        return this.http.get<any>(`${baseUrl.localUrl}/declarations/${id}`)
    }

    // Create new declaration use observable
    createDeclaration(declaration: any): Observable<any> {
        return this.http.post<any>(`${baseUrl.localUrl}/declarations/create/admin`, declaration)
    }

    // Update declaration declaration observable
    updateDeclaration(id: string, declaration: any): Observable<any> {
        return this.http.put<any>(`${baseUrl.localUrl}/declarations/update/${id}`, declaration)
    }

    //Delete user
  deleteDeclaration(id: string): Observable<DECLARATION[]>{
    return this.http.delete<DECLARATION[]>(`${baseUrl.localUrl}/declarations/${id}`)
}

}