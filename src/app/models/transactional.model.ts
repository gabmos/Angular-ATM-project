/*
  ## TransactionType

  The `TransactionType` is an enumeration in the Angular application that represents different types of transactions.

  ### Enumeration Values
  - `Withdrawal`: Represents a withdrawal transaction.
  - `Deposit`: Represents a deposit transaction.
  - `BalanceInquiry`: Represents a balance inquiry transaction.

*/

export enum TransactionType {
  Withdrawal = 'Withdrawal',
  Deposit = 'Deposit',
  BalanceInquiry = 'Balance Inquiry'
}

/*
  ## Transaction

  The `Transaction` interface represents a transaction in the Angular application.

  ### Properties
  - `id`: A number representing the unique identifier of the transaction.
  - `date`: A Date object representing the date and time when the transaction occurred.
  - `amount`: A number representing the amount of money involved in the transaction.
  - `type`: A string literal type representing the type of the transaction, which can be either 'Deposit' or 'Withdrawal'.

*/
export interface Transaction {
  id: number;
  date: Date;
  amount: number;
  type: 'Deposit' | 'Withdrawal';
}
