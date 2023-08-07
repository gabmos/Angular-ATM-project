import { Transaction } from "./transactional.model";

// Export the Account interface.
export interface Account {
    AccountId: number;
    UserId: number;
    DisplayName: string;
    AccountType: string;
    CurrentBalance: number;
    History: Transaction[];
  }