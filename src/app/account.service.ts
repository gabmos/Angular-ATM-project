import { Injectable } from '@angular/core';
import { User, Account } from './authentication.service';
import { Transaction } from './models/transactional.model';

// Define the users array with the Accounts field.
const users: User[] = [
  {
    UserId: 1,
    Name: 'John',
    Username: 'john',
    Password: 'password123',
    Accounts: [
      {
        AccountId: 101,
        UserId: 1,
        DisplayName: 'Checking Account',
        AccountType: 'Checking',
        CurrentBalance: 500,
        History: [
          { id: 1, date: new Date('2023-05-03'), amount: 100, type: 'Deposit' },
          { id: 2, date: new Date('2023-06-02'), amount: 50, type: 'Withdrawal' },
          { id: 3, date: new Date('2023-07-01'), amount: 200, type: 'Deposit' },
        ],
      },
      {
        AccountId: 102,
        UserId: 1,
        DisplayName: 'Savings Account',
        AccountType: 'Savings',
        CurrentBalance: 1000,
        History: [
          { id: 4, date: new Date('2023-08-03'), amount: 50, type: 'Deposit' },
          { id: 5, date: new Date('2023-09-02'), amount: 500, type: 'Withdrawal' },
          { id: 6, date: new Date('2023-10-01'), amount: 100, type: 'Deposit' },
        ],
      },
    ],
  },
  // other users and their accounts
];

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountBalance: number = 0;
  transactionHistory: Transaction[] = [];

  // Method to convert date strings to Date objects
  private convertDateStringsToDates(transactions: Transaction[]): Transaction[] {
    return transactions.map((transaction) => ({
      ...transaction,
      date: new Date(transaction.date), // Convert date string to Date object
    }));
  }

  // Method to fetch transaction history and convert date strings to Dates
  public getTransactionsHistory(accountType: string): Transaction[] {
    // Fetch the transaction history from the backend based on accountType
    const user = users.find(u => u.Username === 'john'); // Replace with the actual username of the logged-in user
    if (user) {
      const account = user.Accounts.find(acc => acc.AccountType === accountType);
      return account ? this.convertDateStringsToDates(account.History) : [];
    }
    return [];
  }

  // Method to get the account balance for a specific accountId
  public getFullBalance(): number {
    // Fetch the account balance from the backend based on accountId
    const user = users.find(u => u.Username === 'john'); // Replace with the actual username of the logged-in user
    if (user) {
      const checkingAccount = user.Accounts.find(account => account.AccountType === 'Checking');
      const savingsAccount = user.Accounts.find(account => account.AccountType === 'Savings');
      
      // Replace the values with the actual account balances
      const checkingBalance = checkingAccount ? checkingAccount.CurrentBalance : 0;
      const savingsBalance = savingsAccount ? savingsAccount.CurrentBalance : 0;
      
      // Return the sum of both balances here
      return checkingBalance + savingsBalance;
    }
    return 0;
  }
    // Method to get the account balance for Checking account
    public getCheckingAccountBalance(): number {
      const user = users.find(u => u.Username === 'john'); // Replace with the actual username of the logged-in user
      if (user) {
        const checkingAccount = user.Accounts.find(account => account.AccountType === 'Checking');
        return checkingAccount ? checkingAccount.CurrentBalance : 0;
      }
      return 0;
    }
  
    // Method to get the account balance for Savings account
    public getSavingsAccountBalance(): number {
      const user = users.find(u => u.Username === 'john'); // Replace with the actual username of the logged-in user
      if (user) {
        const savingsAccount = user.Accounts.find(account => account.AccountType === 'Savings');
        return savingsAccount ? savingsAccount.CurrentBalance : 0;
      }
      return 0;
    }
}
