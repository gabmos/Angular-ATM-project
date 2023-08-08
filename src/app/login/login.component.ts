/*
  ## LoginComponent

  The `LoginComponent` is an Angular component responsible for handling user login functionality.
  It allows users to provide their username and password for authentication.

  ### Properties
  - `username: string`: A variable to store the username input from the user.
  - `password: string`: A variable to store the password input from the user.

  ### Dependencies
  - `AuthenticationService`: A custom service responsible for handling user authentication logic.
  - `Router`: A module from Angular core used for navigating between routes.

  ### Constructor
  - `constructor(private authService: AuthenticationService, private router: Router)`: Initializes the LoginComponent with the AuthenticationService and Router injected as dependencies.

  ### Methods
  - `onLogin(): void`: A function triggered when the user clicks the "Login" button. It calls the `login` method of the `AuthenticationService` with the provided `username` and `password`. If login is successful, the user is redirected to the '/dashboard' route, and a success message is logged to the console. Otherwise, an error message is logged.
*/

import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showError: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onLogin(): void {
    this.showError = false;
    this.errorMessage = '';

    try {
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/dashboard']);
      } else {
        throw new Error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error instanceof Error) {
        this.showError = true;
        this.errorMessage = error.message;
      } else {
        this.showError = true;
        this.errorMessage = 'An unknown error occurred.';
      }
    }
  }
}
