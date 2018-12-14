export default class Account {
    constructor(){
        this.balance = 0
    }

    getBalance() {
        return this.balance;
    }

    deposit(value) {
        if (value < 0) {
            throw Error('Deposit value must be positive')
        }
        this.balance += value
    }

    withdraw(value) {
        if (value < 0) {
            throw Error('Withdraw value must be positive')
        }
        if (this.balance < value) {
            throw Error('Withdraw of ' + value  + ' rejected. Not enough money on account. Only '+ this.balance+' available')
        }
        this.balance -= value
    }

}