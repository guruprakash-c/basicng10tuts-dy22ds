import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AboutusComponent } from './aboutus/aboutus.component';

@Injectable()
export class UnsavedGuard implements CanDeactivate<AboutusComponent> {
  canDeactivate(
    component: AboutusComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (component.isDirty) {
      return window.confirm('Are you sure want to leave this page?');
    }
    return true;
  }
}
