export class BankAccount {
  constructor() {
    this.stat = '',
    this.money = 0;
  }

  open() {
    if (this.stat === 'open') {
      throw new ValueError('ValueError');
    } else {
      this.stat = 'open';
    }
  }

  close() {
    if (this.stat === 'open') {
      this.stat = 'closed';
      this.money = 0;
    } else {
      throw new ValueError('ValueError');
    }
  }

  deposit(coin) {
    if (this.stat === 'open' && coin >= 0) {
      this.money += coin;
    } else {
      throw new ValueError('ValueError');
    }
  }

  withdraw(coin) {
    if (this.stat === 'open' && coin >= 0 && coin <= this.money) {
      this.money -= coin;
    } else {
      throw new ValueError('ValueError');
    }
  }

  get balance() {
    if (this.stat === 'open') {
      return this.money;
    }
    throw new ValueError('ValueError');
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
