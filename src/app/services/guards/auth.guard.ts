import { IAppState } from './../../store/store';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StoreService } from '../store/store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedin = false;
  constructor(private storeService: StoreService, private router: Router) {
    this.loggedIn();
  }


  loggedIn() {
    this.storeService.store.subscribe((data: IAppState) => {
      if (data.User) {
        if (data.User.LoggedIn) {
          this.isLoggedin = true;
        } else {
          this.router.navigate(['/login']);
          this.isLoggedin = false;
        }
      } else {
        this.router.navigate(['/login']);
        this.isLoggedin = false;
      }
    },
      () => {
        this.router.navigate(['/login']);
        this.isLoggedin = false;
      });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return this.isLoggedin;
  }

}
