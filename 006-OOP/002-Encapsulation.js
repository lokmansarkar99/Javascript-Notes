// Encapsulation
// Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit, often an object. It also hides the internal state of an object and only exposes the necessary methods to interact with that data.

class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this._balance = balance; // Private property (conventionally private)
    }
  
    // Getter to access the balance
    getBalance() {
      return this._balance;
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
        console.log(`${amount} deposited. New balance: ${this._balance}`);
      } else {
        console.log('Deposit amount must be positive');
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
        console.log(`${amount} withdrawn. New balance: ${this._balance}`);
      } else {
        console.log('Invalid withdrawal amount');
      }
    }
  }
  
  const myAccount = new BankAccount('John', 1000);
  myAccount.deposit(500); // Output: 500 deposited. New balance: 1500
  myAccount.withdraw(200); // Output: 200 withdrawn. New balance: 1300
  console.log(myAccount.getBalance()); // Output: 1300
  