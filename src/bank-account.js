//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor(money) {
    this.money = money; 
  }

  open() {
    this.money = 0;
  }

  close() {
    
  }

  deposit(num) {
    this.money = num ;
  }

  withdraw() {
   
  }

  get balance() {
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
