import { Injectable } from '@angular/core';
import { Transaction } from './models/transactional.model';
import { UserService } from './user.service';

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

// Export the User interface.
export interface User {
  UserId: number;
  Name: string;
  Username: string;
  Password: string;
  Accounts: Account[];
}

// Export the Account interface.
export interface Account {
  AccountId: number;
  UserId: number;
  DisplayName: string;
  AccountType: string;
  CurrentBalance: number;
  History: Transaction[];
}
