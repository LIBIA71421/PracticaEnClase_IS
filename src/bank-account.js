//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor(money) {
    this.money = 0; 
    this.inicio = false;
  }

  open() {
    if(this.inicio == true)
    { 
      throw new ValueError();
    }
    else
    {
      this.inicio = true;
    }
  }

  close() {
    if(this.inicio == false)
    {
      throw new ValueError();
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
      throw new ValueError();
    }
    this.money = this.money + num;
  }

  withdraw(num) {
    if(this.inicio == false){
       throw new ValueError();
    }
    else{
      if (num > this.money){
         throw new ValueError();
      }
      else{
        this.money = this.money - num;
      }
    }
  }

  get balance() {
    if(this.inicio == false)
    {
       throw new ValueError();
    }
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
