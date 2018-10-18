import Price from "./price"

describe("Price", () => {

    describe("Promesses résolues", () => {

        test("should work", done => {
            const p = new Price()
            const promise = p.calculate(3, 1.21)
            promise.then(result => {
                expect(result).toBe(3.63)
                done()
            })
        })

        test("should work", () => {
            const p = new Price()
            const promise = p.calculate(3, 1.21)
            return promise.then(result => {
                expect(result).toBe(3.63)
            })
        })

        test("should work with async", async () => {
            const p = new Price()
            const result = await p.calculate(3, 1.21)
            expect(result).toBe(3.63)
        })

        test("should work with resolves", () => {
            const p = new Price()
            const promise = p.calculate(3, 1.21)
            expect.assertions(1)
            return expect(promise).resolves.toBe(3.63)
        })

    })

    // Fails

    describe("Promesses en échec", () => {

        test("should manage promise rejection", () => {
            const p = new Price()
            const promise = p.calculate(-3, 1.21)
            return promise
                .then(_ => {
                    fail("Devrait déclencher une erreur")
                })
                .catch(err => {
                    expect(err).toBe('Quantity couldn\'t be negative')
                })
        })

        test("should manage promise rejection with async", async () => {
            const p = new Price()
            try {
                const result = await p.calculate(-3, 1.21);
                fail("Devrait déclencher une erreur");
            } catch (err) {
                expect(err).toBe('Quantity couldn\'t be negative')
            }
        })

        test("should manage promise rejection with rejects", () => {
            const p = new Price()
            const result = p.calculate(-3, 1.21)
            return expect(result).rejects.toBe('Quantity couldn\'t be negative')
        })

    })
})
