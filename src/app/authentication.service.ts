import { Injectable } from '@angular/core';
import { Transaction } from './models/transactional.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticatedUser: User | null = null;

  // Hardcoded users array.
  private users: User[] = [
    {
      UserId: 1,
      Name: 'admin',
      Username: 'admin',
      Password: 'admin',
      Accounts: []
    },
    {
      UserId: 2,
      Name: 'dev',
      Username: 'dev',
      Password: 'dev',
      Accounts: []
    },
    {
      UserId: 3,
      Name: 'user',
      Username: 'user',
      Password: 'user',
      Accounts: []
    },
  ];

  constructor() { }
  
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

  //check if Autenticated
  isAuthenticated(): boolean {
    return !!this.authenticatedUser;
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
