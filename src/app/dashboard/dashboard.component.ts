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
}
