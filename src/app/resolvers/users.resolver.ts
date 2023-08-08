import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { USERS, UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import {  Injectable } from '@angular/core';

@Injectable()
export class UsersResolver implements Resolve<USERS[]> {

  constructor(private usersService: UsersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<USERS[]>{
    return this.usersService.getAllUsers();
  }

}
