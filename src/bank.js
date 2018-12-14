import Account from "./account"
export default class Bank {

    createAccount(number) {
        const account = new Account()
        account.deposit(number)
        return account
    }

    transfer(amount, sourceAccount, targetAccount) {
        sourceAccount.withdraw(amount)
        try {
            targetAccount.deposit(amount)
        } catch (e) {
            sourceAccount.deposit(amount)
        }
    }
}