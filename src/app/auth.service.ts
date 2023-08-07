/*
  ## AuthService

  The `AuthService` is a service in an Angular application that implements the `CanActivate` interface to control access to routes based on authentication status.
  This guard ensures that only authenticated users can access specific routes.

  ### Dependencies
  - `AuthenticationService`: A service that provides authentication-related functionalities.

  ### Methods
  - `canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree`: 
    Implements the `CanActivate` interface method. It checks if the user is authenticated. If authenticated, it allows access to the route; otherwise, it redirects the user to the login page and denies access.

*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirect the user to the login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
