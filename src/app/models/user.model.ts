import { Account } from "./account.model";

// Export the User interface.
export interface User {
    UserId: number;
    Name: string;
    Username: string;
    Password: string;
    Accounts: Account[];
  }