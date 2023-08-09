import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {  Injectable } from '@angular/core';
import { VEHICULES, VehiculesService } from '../services/vehicules.service';
import { Observable } from 'rxjs';

@Injectable()
export class VehiculesResolver implements Resolve<any> {

  constructor(private vehiculesService: VehiculesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VEHICULES[]>{
    return this.vehiculesService.getAllVehicule();
  }
};
