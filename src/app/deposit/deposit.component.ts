/*
  ## DepositComponent

  The `DepositComponent` is an Angular component responsible for handling deposit functionality in the application.
  It allows users to deposit a specified amount into either the 'Checking' or 'Savings' account.

  ### Properties
  - `amount: number`: A variable to store the amount to be deposited by the user.
  - `accountType: string`: A variable to determine the account type for the deposit, defaults to 'Checking'.
  - `showError: boolean`: A flag indicating whether to show an error message on the UI.
  - `errorMessage: string`: A message to display when an error occurs during the deposit process.

  ### Dependencies
  - `AccountService`: A custom service responsible for managing user account-related operations.
  - `Router`: A module from Angular core used for navigating between routes.

  ### Lifecycle Hook
  - `ngOnInit(): void`: Lifecycle hook method called when the component is initialized.

  ### Methods
  - `onDeposit(): void`: A function triggered when the user clicks the "Deposit" button. It performs the deposit operation by calling the corresponding method from the `AccountService` based on the selected `accountType`.
    - If the `amount` is less than or equal to 0, it throws an error with the message 'Please enter a valid amount to deposit.'
    - If the `accountType` is 'Checking', it calls `depositToChecking()` method of the `AccountService`.
    - If the `accountType` is 'Savings', it calls `depositToSavings()` method of the `AccountService`.
    - If an invalid `accountType` is selected, it throws an error with the message 'Invalid account type selected.'
    - After a successful deposit, the form fields are reset, and the user is redirected to the '/dashboard' page.
    - If an error occurs during the deposit process, it handles and displays the error message accordingly.

  - `onCancel(): void`: A function triggered when the user clicks the "Cancel" button. It redirects the user to the '/dashboard' page.
*/


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
