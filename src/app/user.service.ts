/*
  ## UserService

  The `UserService` is a service in an Angular application that provides access to a hardcoded array of user data.
  This service is responsible for retrieving and managing user information, including their accounts and transaction history.

*/


import { Injectable } from '@angular/core';
import { User } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Hardcoded users array 
  private users: User[] = [
    {
      UserId: 1,
      Name: 'John',
      Username: 'john',
      Password: '123',
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
    {
      UserId: 2,
      Name: 'Alice',
      Username: 'alice',
      Password: '456',
      Accounts: [
        {
          AccountId: 103,
          UserId: 2,
          DisplayName: 'Checking Account',
          AccountType: 'Checking',
          CurrentBalance: 800,
          History: [
            { id: 1, date: new Date('2023-05-03'), amount: 200, type: 'Deposit' },
            { id: 2, date: new Date('2023-06-02'), amount: 100, type: 'Withdrawal' },
            { id: 3, date: new Date('2023-07-01'), amount: 300, type: 'Deposit' },
          ],
        },
        {
          AccountId: 104,
          UserId: 2,
          DisplayName: 'Savings Account',
          AccountType: 'Savings',
          CurrentBalance: 1500,
          History: [
            { id: 4, date: new Date('2023-08-03'), amount: 100, type: 'Deposit' },
            { id: 5, date: new Date('2023-09-02'), amount: 600, type: 'Withdrawal' },
            { id: 6, date: new Date('2023-10-01'), amount: 200, type: 'Deposit' },
          ],
        },
      ],
    },
    {
      UserId: 3,
      Name: 'Bob',
      Username: 'bob',
      Password: '789',
      Accounts: [
        {
          AccountId: 105,
          UserId: 3,
          DisplayName: 'Checking Account',
          AccountType: 'Checking',
          CurrentBalance: 300,
          History: [
            { id: 1, date: new Date('2023-05-03'), amount: 50, type: 'Deposit' },
            { id: 2, date: new Date('2023-06-02'), amount: 20, type: 'Withdrawal' },
            { id: 3, date: new Date('2023-07-01'), amount: 100, type: 'Deposit' },
          ],
        },
        {
          AccountId: 106,
          UserId: 3,
          DisplayName: 'Savings Account',
          AccountType: 'Savings',
          CurrentBalance: 700,
          History: [
            { id: 4, date: new Date('2023-08-03'), amount: 30, type: 'Deposit' },
            { id: 5, date: new Date('2023-09-02'), amount: 200, type: 'Withdrawal' },
            { id: 6, date: new Date('2023-10-01'), amount: 50, type: 'Deposit' },
          ],
        },
      ],
    },
  ];


  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}
