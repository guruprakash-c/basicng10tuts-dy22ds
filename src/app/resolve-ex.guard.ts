import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveExGuard implements Resolve<any> {
  teamMates = [
    {
      id: 1,
      photo: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
      name: 'Bob',
      email: 'bob@example.com'
    },
    {
      id: 2,
      photo: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
      name: 'Smith',
      email: 'smith@example.com'
    }
  ];
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.teamMates;
  }
}
