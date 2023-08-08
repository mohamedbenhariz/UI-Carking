import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/env/env';

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
        return this.http.post<any>(`${baseUrl.localUrl}/declarations`, declaration)
    }

    // Update declaration use observable
    updateDeclaration(id: string, declaration: any): Observable<any> {
        return this.http.put<any>(`${baseUrl.localUrl}/declarations/${id}`, declaration)
    }

}