import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/env/env';

export class VEHICULES {
  id!: number;
  marque!: string;
  matricule!: string;
  chassis!: string;
  couleur!: string;
  photo!: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {

  constructor(private http: HttpClient) { }

   // Get all vehicules use observable
   getAllVehicule(): Observable<VEHICULES[]> {
    return this.http.get<VEHICULES[]>(`${baseUrl.localUrl}/vehicules`)
  }

  // Get vehicule by id use observable
  getVehiculeById(id: string): Observable<VEHICULES[]> {
    return this.http.get<VEHICULES[]>(`${baseUrl.localUrl}/vehicules/${id}`)
  }

  // Create new vehicule use observable
  createVehicule(vehicule: any): Observable<any> {
    return this.http.post<any>(`${baseUrl.localUrl}/vehicules/create`, vehicule)
  }

  //Update vehicule
  updateVehicule(id:string, vehicule:string): Observable<any> {
    return this.http.put<any>(`${baseUrl.localUrl}/vehicules/update/${id}`, vehicule)
}
  //Delete vehicule
  deleteVehicule(id: string): Observable<VEHICULES[]>{
    return this.http.delete<VEHICULES[]>(`${baseUrl.localUrl}/vehicules/${id}`)
}

}
