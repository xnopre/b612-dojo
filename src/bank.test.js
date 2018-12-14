import Bank from "./bank"

describe("Bank account manager", () => {

    test('should create a bank account with init balance of 80', () => {
        const bank = new Bank()
        const account = bank.createAccount(80)
        expect(account.getBalance()).toBe(80)
    })

    test('should transfer amount from an account to another account', () => {
        const bank = new Bank();
        const bankAccount1 = bank.createAccount(150);
        const bankAccount2 = bank.createAccount(80);

        bank.transfer(35, bankAccount1, bankAccount2);

        expect(bankAccount1.getBalance()).toBe(115);
        expect(bankAccount2.getBalance()).toBe(115);
    })

    test('should do nothing if error during transfer', () => {
        const bank = new Bank();
        const sourceAccount = bank.createAccount(150);
        const targetAccount = bank.createAccount(80);
        targetAccount.deposit = () => {throw Error("paf")}

        try {
            bank.transfer(35, sourceAccount, targetAccount);
        } catch (e) {
            console.log("Error during transfer")
        }
        expect(sourceAccount.getBalance()).toBe(150);
        expect(targetAccount.getBalance()).toBe(80);

    })

})