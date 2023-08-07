/*
  ## DashboardComponent

  The `DashboardComponent` is an Angular component responsible for displaying the user dashboard with account information and transaction history.
  It shows the account balance for both 'Checking' and 'Savings' accounts, along with a combined total balance.
  The component also displays transaction history for both account types.

  ### Properties
  - `accountBalance: number`: Variable to store the balance of the 'Checking' account.
  - `savingsAccountBalance: number`: Variable to store the balance of the 'Savings' account.
  - `allAccountsBalance: number`: Variable to store the combined total balance of all accounts.
  - `checkingTransactions: Transaction[]`: An array to store the transaction history of the 'Checking' account.
  - `savingsTransactions: Transaction[]`: An array to store the transaction history of the 'Savings' account.
  - `authenticatedUserName: string | null`: Variable to store the authenticated user's name.

  ### Dependencies
  - `AccountService`: A custom service responsible for managing user account-related operations.
  - `AuthenticationService`: A custom service handling the authentication logic.
  - `Router`: A module from Angular core used for navigating between routes.

  ### Lifecycle Hook
  - `ngOnInit(): void`: Lifecycle hook method called when the component is initialized.
    - Fetches the authenticated user's name using the `getAuthenticatedUserName()` method from the `AuthenticationService`.
    - Retrieves transaction history and balances for both 'Checking' and 'Savings' accounts using the methods from the `AccountService`.

  ### Methods
  - `onWithdrawal(accountType: string): void`: A function triggered when the user clicks the "Withdraw" button for a specific account.
    - Redirects the user to the withdrawal page based on the selected account type using the `Router`.

  - `onDeposit(accountType: string): void`: A function triggered when the user clicks the "Deposit" button for a specific account.
    - Redirects the user to the deposit page based on the selected account type using the `Router`.
*/


import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Transaction } from '../models/transactional.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accountBalance: number = 0;
  savingsAccountBalance: number = 0;
  allAccountsBalance: number = 0;
  checkingTransactions: Transaction[] = [];
  savingsTransactions: Transaction[] = [];
  authenticatedUserName: string | null = null; // Variable to store the authenticated user's name

  constructor(
    private accountService: AccountService, // Inject the AccountService
    private authService: AuthenticationService, // Inject the AuthenticationService
    private router: Router // Inject the Router
  ) { }

  ngOnInit(): void {
    // Fetch the authenticated user's name and store it in the variable
    this.authenticatedUserName = this.authService.getAuthenticatedUserName();

    this.checkingTransactions = this.accountService.getTransactionsHistory('Checking');
    this.savingsTransactions = this.accountService.getTransactionsHistory('Savings');
    this.accountBalance = this.accountService.getCheckingAccountBalance();
    this.savingsAccountBalance = this.accountService.getSavingsAccountBalance();
    this.allAccountsBalance = this.accountService.getFullBalance();
  }

  onWithdrawal(accountType: string): void {
    // Implement the logic for withdrawal here
    this.router.navigate(['/withdraw', accountType]);
  }

  onDeposit(accountType: string): void {
    // Implement the logic for deposit here
    this.router.navigate(['/deposit', accountType]);
  }

  onLogout(): void {
    // Implement the logic for logout here
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
