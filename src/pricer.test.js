import Pricer from "./pricer"

describe("Pricer", () => {

    test("Simple price (tax free, without discount) #1", () => {
        expect(new Pricer().getPrice(1, 1, 'CH' )).toBe(1);
    });

    test("Simple price (tax free, without discount) #2", () => {
        expect(new Pricer().getPrice(3, 1, 'CH' )).toBe(3);
    });

    test("Simple price (tax free, without discount) #3", () => {
        expect(new Pricer().getPrice(3, 2, 'CH' )).toBe(6);
    });

    test("Price that include VAT, without discount #1", () => {
        expect(new Pricer().getPrice(3, 2, 'UT' )).toBe(6.41);
    });

    test("Price that include VAT, without discount #2", () => {
        expect(new Pricer().getPrice(3, 2, 'NV' )).toBe(6.48);
    });

    test("Price that include VAT, without discount #3", () => {
        expect(new Pricer().getPrice(3, 2, 'TX' )).toBe(6.38);
    });

    test("Discounted tax free price over $1000", () => {
        expect(new Pricer().getPrice(3, 500, 'CH' )).toBe(1455);
    });

    test("Discounted tax free price between $5000 and $7000", () => {
        expect(new Pricer().getPrice(1, 6000, 'CH' )).toBe(5700);
    });
})