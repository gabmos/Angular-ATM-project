import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Transaction } from '../models/transactional.model';

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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.checkingTransactions = this.accountService.getTransactionsHistory('Checking');
    this.savingsTransactions = this.accountService.getTransactionsHistory('Savings');
    this.accountBalance = this.accountService.getCheckingAccountBalance();
    this.savingsAccountBalance = this.accountService.getSavingsAccountBalance();
    this.allAccountsBalance = this.accountService.getFullBalance();
  }

  onWithdrawal(accountType: string): void {
    // Implement the logic for withdrawal here
  }

  onDeposit(accountType: string): void {
    // Implement the logic for deposit here
  }
}
