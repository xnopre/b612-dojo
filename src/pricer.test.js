import Pricer from "./pricer"

describe("Pricer", () => {

    test("1 article, cost 1", () => {
        expect(new Pricer().getPrice(1, 1, 'CH' )).toBe(1);
    });

    test("3 article, cost 3", () => {
        expect(new Pricer().getPrice(3, 1, 'CH' )).toBe(3);
    });

    test("3 article, cost 6", () => {
        expect(new Pricer().getPrice(3, 2, 'CH' )).toBe(6);
    });

    test("3 article at 2$ in Utha cost 6 + tax", () => {
        expect(new Pricer().getPrice(3, 2, 'UT' )).toBe(6.411);
    });

    test("3 article at 2$ in Nevada cost 6.48 + tax", () => {
        expect(new Pricer().getPrice(3, 2, 'NV' )).toBe(6.48);
    });

    test("3 article at 2$ in Texas cost 6.375 + tax", () => {
        expect(new Pricer().getPrice(3, 2, 'TX' )).toBe(6.375);
    });


})
