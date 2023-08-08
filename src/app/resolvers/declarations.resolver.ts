import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {  Injectable } from '@angular/core';
import { DeclarationsService } from '../services/declarations.service';

@Injectable()
export class DeclarationsResolver implements Resolve<any>{
    constructor(private declarationsService: DeclarationsService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.declarationsService.getAllDeclarations();
    }
}