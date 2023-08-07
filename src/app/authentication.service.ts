/*
  ## AuthenticationService

  The `AuthenticationService` is a service in an Angular application that handles user authentication.
  This service allows users to log in and out, check authentication status, and manage authenticated user information.

  It relies on the `UserService` to retrieve a list of users and perform authentication logic using hardcoded user data.

  ### Methods
  - `login(username: string, password: string): boolean`: Performs authentication based on provided credentials. Returns true if successful, false otherwise.
  - `logout(): void`: Clears the authenticated user on logout.
  - `isAuthenticated(): boolean`: Checks if the user is currently authenticated.
  - `getAuthenticatedUserName(): string | null`: Returns the name of the authenticated user or null if no user is authenticated.
  - `getAuthenticatedUser(): User | null`: Returns the authenticated user object or null if no user is authenticated.
  - `updateAuthenticatedUser(user: User): void`: Updates the authenticated user if needed.

  ### Interfaces
  - `User`: Represents a user with user-related information, including accounts and transactions.
  - `Account`: Represents an account associated with a user, containing information such as account type, balance, and transaction history.

*/

import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users: User[];
  private authenticatedUser: User | null = null;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers(); // get the users from the UserService
  }
  
  login(username: string, password: string): boolean {
    // Perform authentication logic here. If the provided credentials are valid,
    // set the authenticated user and return true. Otherwise, return false.
    const user = this.authenticateUser(username, password);
    if (user) {
      this.authenticatedUser = user;
      return true;
    }
    return false;
  }
  
  logout(): void {
    // Clear the authenticated user on logout.
    this.authenticatedUser = null;
  }
  
  private authenticateUser(username: string, password: string): User | null {
    // Implement your authentication logic here. Hardcoded users.
    const authenticatedUser = this.users.find(user => user.Username === username && user.Password === password);
    return authenticatedUser || null;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.authenticatedUser;
  }

  // Get the name of the authenticated user
  getAuthenticatedUserName(): string | null {
    return this.authenticatedUser ? this.authenticatedUser.Name : null;
  }

  // Get the authenticated user object
  getAuthenticatedUser(): User | null {
    return this.authenticatedUser;
  }

  // Update the authenticated user (if needed)
  updateAuthenticatedUser(user: User): void {
    this.authenticatedUser = user;
  }
}
