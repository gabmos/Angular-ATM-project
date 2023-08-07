import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  amount: number = 0;
  accountType: string = 'Checking';
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  onWithdrawal(): void {
    this.showError = false;
    this.errorMessage = '';

    try{
    if (this.amount <= 0) {
      throw new Error('Please enter a valid amount to withdraw.');
    }

    if (this.accountType === 'Checking') {
      this.accountService.withdrawFromChecking(this.amount);
    } else if (this.accountType === 'Savings') {
      this.accountService.withdrawFromSavings(this.amount);
    } else {
      alert('Invalid account type selected.');
    }

    // Reset the form fields after withdrawal
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
