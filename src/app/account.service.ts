/*
  ## AccountService

  The `AccountService` is a service in an Angular application that provides functionalities related to user accounts and transactions.
  This service allows users to view account balances, transaction history, deposit funds, and withdraw funds for their Checking and Savings accounts.

  ### Methods
  - `getTransactionsHistory(accountType: string): Transaction[]`: Fetches the transaction history for a specific account type (Checking or Savings) and converts date strings to Date objects.
  - `getFullBalance(): number`: Gets the total balance by summing up the balances of the Checking and Savings accounts.
  - `getCheckingAccountBalance(): number`: Gets the current balance of the Checking account.
  - `getSavingsAccountBalance(): number`: Gets the current balance of the Savings account.
  - `withdrawFromChecking(amount: number): void`: Withdraws funds from the Checking account and updates the balance and transaction history.
  - `withdrawFromSavings(amount: number): void`: Withdraws funds from the Savings account and updates the balance and transaction history.
  - `depositToChecking(amount: number): void`: Deposits funds to the Checking account and updates the balance and transaction history.
  - `depositToSavings(amount: number): void`: Deposits funds to the Savings account and updates the balance and transaction history.

*/

import { Injectable } from '@angular/core';
import { Transaction } from './models/transactional.model';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private users: User[];
  accountBalance: number = 0;
  transactionHistory: Transaction[] = [];

  constructor(private userService: UserService, private authService: AuthenticationService) {
    this.users = this.userService.getUsers(); // get the users from the UserService
  }

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
    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const account = authenticatedUser.Accounts.find(acc => acc.AccountType === accountType);
      return account ? this.convertDateStringsToDates(account.History) : [];
    }
    return [];
  }

  // Method to get the account balance for a specific accountId
  public getFullBalance(): number {
    // Fetch the account balance from the backend based on accountId
    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const checkingAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Checking');
      const savingsAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Savings');
      
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
    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const checkingAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Checking');
      return checkingAccount ? checkingAccount.CurrentBalance : 0;
    }
    return 0;
  }

  // Method to get the account balance for Savings account
  public getSavingsAccountBalance(): number {
    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const savingsAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Savings');
      return savingsAccount ? savingsAccount.CurrentBalance : 0;
    }
    return 0;
  }

  // Method to withdraw from Checking account
  withdrawFromChecking(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid withdrawal amount.');
    }

    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const checkingAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Checking');
      if (checkingAccount) {
        if (amount > checkingAccount.CurrentBalance) {
          throw new Error('Insufficient funds in the Checking account.');
        }
        checkingAccount.CurrentBalance -= amount;
        checkingAccount.History.push({ id: checkingAccount.History.length + 1, date: new Date(), amount: -amount, type: 'Withdrawal' });
      }
    }
  }

  // Method to withdraw from Savings account
  withdrawFromSavings(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid withdrawal amount.');
    }

    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const savingsAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Savings');
      if (savingsAccount) {
        if (amount > savingsAccount.CurrentBalance) {
          throw new Error('Insufficient funds in the Savings account.');
        }
        savingsAccount.CurrentBalance -= amount;
        savingsAccount.History.push({ id: savingsAccount.History.length + 1, date: new Date(), amount: -amount, type: 'Withdrawal' });
      }
    }
  }

  // Method to deposit to Checking account
  depositToChecking(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid deposit amount.');
    }

    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const checkingAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Checking');
      if (checkingAccount) {
        checkingAccount.CurrentBalance += amount;
        checkingAccount.History.push({ id: checkingAccount.History.length + 1, date: new Date(), amount, type: 'Deposit' });
      }
    }
  }

  // Method to deposit to Savings account
  depositToSavings(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid deposit amount.');
    }

    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      const savingsAccount = authenticatedUser.Accounts.find(account => account.AccountType === 'Savings');
      if (savingsAccount) {
        savingsAccount.CurrentBalance += amount;
        savingsAccount.History.push({ id: savingsAccount.History.length + 1, date: new Date(), amount, type: 'Deposit' });
      }
    }
  }

}
