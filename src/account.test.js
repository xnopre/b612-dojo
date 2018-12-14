import Account from "./account"

describe("Account", () => {

    let account

    beforeEach(() => {
        account = new Account()
    })

    test("should have a default balance to 0", () => {
        expect(account.getBalance()).toBe(0)
    })

    describe("deposit", () => {
        test("should increase balance by 10", () => {
            account.deposit(10);
            expect(account.getBalance()).toBe(10)
        })

        test('should handle multiple adding', () => {
            account.deposit(10)
            account.deposit(20)
            expect(account.getBalance()).toBe(30)
        })
    })

    describe("withdraw", () => {
        test("should decrease balance by 5", () => {
            account.deposit(15)
            account.withdraw(5);
            expect(account.getBalance()).toBe(10)
        })

        test("should decrease balance by 5 + 15", () => {
            account.deposit(20)
            account.withdraw(5);
            account.withdraw(15);
            expect(account.getBalance()).toBe(0)
        })
    })

    test("withdraw without enough balance should throw error", () => {
        expect(() => account.withdraw(5)).toThrow('Withdraw of 5 rejected. Not enough money ' +
            'on account. Only 0 available')
    })

    test("deposit should throw error for a negative value", () => {
        expect(() => account.deposit(-100)).toThrow('Deposit value must be positive')
        expect(account.getBalance()).toBe(0)
    })

    test("withdraw should throw error for a negative value", () => {
        expect(() => account.withdraw(-100)).toThrow('Withdraw value must be positive')
        expect(account.getBalance()).toBe(0)
    })


})
