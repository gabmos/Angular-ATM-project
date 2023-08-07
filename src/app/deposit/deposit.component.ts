import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  amount: number = 0;
  accountType: string = 'Checking';
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  onDeposit(): void {
    this.showError = false;
    this.errorMessage = '';

    try {
      if (this.amount <= 0) {
        throw new Error('Please enter a valid amount to deposit.');
      }

      if (this.accountType === 'Checking') {
        this.accountService.depositToChecking(this.amount);
      } else if (this.accountType === 'Savings') {
        this.accountService.depositToSavings(this.amount);
      } else {
        throw new Error('Invalid account type selected.');
      }

      // Reset the form fields after deposit
      this.amount = 0;
      this.accountType = 'Checking';
      //return to the dashboard page
      this.router.navigate(['/dashboard']);
    } catch (error) {
      if (error instanceof Error) {
        this.showError = true;
        this.errorMessage = error.message;
      } else {
        this.showError = true;
        this.errorMessage = 'An unknown error occurred.';
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
