import { Injectable } from '@angular/core';
import { User } from './authentication.service';

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
    // other users and their accounts
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}
