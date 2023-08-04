export enum TransactionType {
    Withdrawal = 'Withdrawal',
    Deposit = 'Deposit',
    BalanceInquiry = 'Balance Inquiry'
  }
  
  export interface Transaction {
    id: number;
    date: Date;
    amount: number;
    type: 'Deposit' | 'Withdrawal';
  }
  