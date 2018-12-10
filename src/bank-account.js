export default class BankAccount {
    constructor(){
        this.balance = 0
    }

    getBalance() {
        return this.balance;
    }

    deposit(value) {
        this.balance += value
    }

    withdraw(value) {
        if (this.balance < value) throw Error('Withdraw of ' + value  + ' rejected. Not enough money on account. Only '+ this.balance+' available')
        this.balance -= value
    }
}