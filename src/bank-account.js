//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor(money) {
    this.money = 0; 
    this.inicio = false;
    this.Error = new ValueError();
  }

  open() {
    this.inicio = true;
  }

  close() {
    this.inicio = false;

    if(this.inicio == false)
    {
      throw this.error;
    }
    else
    {
      this.inicio = false;
      this.money = 0;
    }
  }

  deposit(num) {
    if(this.inicio == false)
    {
      throw this.error;
    }
    this.money = this.money + num;
  }

  withdraw(num) {
    if(this.inicio == false)
    {
      throw this.error;
    }
    this.money = this.money - num;
  }

  get balance() {
    if(this.inicio == false)
    {
      throw this.error;
    }
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
