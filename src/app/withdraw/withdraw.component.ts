/*
  ## WithdrawComponent

  The `WithdrawComponent` is a component in the Angular application responsible for handling withdrawals from the user's checking or savings account.

  ### Selector
  - `app-withdraw`: The selector used to identify this component in the HTML template.

  ### Template URL
  - `./withdraw.component.html`: The path to the template file that defines the structure of this component's view.

  ### Style URLs
  - `./withdraw.component.css`: The path to the CSS file that provides styling for this component's view.

  ### Properties
  - `amount`: A property to store the withdrawal amount entered by the user (default value: 0).
  - `accountType`: A property to store the selected account type (Checking or Savings) for withdrawal (default value: 'Checking').
  - `showError`: A boolean property that indicates whether to display the error message (default value: false).
  - `errorMessage`: A property to store the error message to be displayed in case of an error during withdrawal (default value: '').

  ### Constructor
  - `accountService`: An instance of the `AccountService` used to handle withdrawals from the user's accounts.
  - `router`: An instance of the `Router` service used for navigation.

  ### Methods
  - `ngOnInit()`: A lifecycle hook method called after the component has been initialized. It currently has no specific functionality.

  - `onWithdrawal()`: A method triggered when the user initiates a withdrawal. It validates the withdrawal amount and account type, then calls the appropriate `AccountService` method to perform the withdrawal. It handles possible errors during the withdrawal process and resets the form fields after a successful withdrawal. Finally, it navigates the user back to the dashboard page after withdrawal.

  - `onCancel()`: A method triggered when the user cancels the withdrawal. It navigates the user back to the dashboard page without performing any withdrawal.

  ### Note
  - The `onWithdrawal()` method performs validation checks for the withdrawal amount and account type. It uses the `AccountService` to perform the actual withdrawal operation. If an error occurs during withdrawal, the error message is displayed to the user. The user is also redirected back to the dashboard page after a successful withdrawal or in case of cancellation.

*/

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  amount: number = 0;
  accountType: string = 'Checking';
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  onWithdrawal(): void {
    this.showError = false;
    this.errorMessage = '';

    try {
      if (this.amount <= 0) {
        throw new Error('Please enter a valid amount to withdraw.');
      }

      if (this.accountType === 'Checking') {
        this.accountService.withdrawFromChecking(this.amount);
      } else if (this.accountType === 'Savings') {
        this.accountService.withdrawFromSavings(this.amount);
      } else {
        throw new Error('Invalid account type selected.');
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
