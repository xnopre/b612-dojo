import BankAccount from "./bank-account"

describe("Bank account behavior tests", () => {

    let bankAccount

    beforeEach(() => {
        bankAccount = new BankAccount()
    })

    test("Should test a bank account statement balance is 0", () => {
        expect(bankAccount.getBalance()).toBe(0)
    })

    test("balance should be increased by 10", () => {
        bankAccount.deposit(10);
        expect(bankAccount.getBalance()).toBe(10)
    })

    test('Should handle multiple adding', () => {
        bankAccount.deposit(10)
        bankAccount.deposit(20)
        expect(bankAccount.getBalance()).toBe(30)
    })

    test("balance should be decreased by 5", () => {
        bankAccount.deposit(15)
        bankAccount.withdraw(5);
        expect(bankAccount.getBalance()).toBe(10)
    })

    test("balance should be decreased by 5 + 15", () => {
        bankAccount.deposit(20)
        bankAccount.withdraw(5);
        bankAccount.withdraw(15);
        expect(bankAccount.getBalance()).toBe(0)
    })

    test("withdraw without enough balance should throw error", () => {
        expect(() => bankAccount.withdraw(5)).toThrow('Withdraw of 5 rejected. Not enough money ' +
            'on account. Only 0 available')
    })

})
