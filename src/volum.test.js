import Volum from "./volum"

describe("Volum", () => {

    test("should return 0 for empty array", () => {
        expect(new Volum().getVolum([])).toBe(0);
    })

    test("should return 1 for simple array", () => {
        expect(new Volum().getVolum([1,0,1])).toBe(1);
    })

    test("should return 2 for col high of 2", () => {
        expect(new Volum().getVolum([2,0,2])).toBe(2);
    })

    test("should manage multiple col below max", () => {
        expect(new Volum().getVolum([2,0,0,2])).toBe(4);
    })

    test("should manage a step of 1 on left", () => {
        expect(new Volum().getVolum([1,2,0,0,2])).toBe(4);
    })

    test("should manage a step of 1 on left and right", () => {
        expect(new Volum().getVolum([1,2,0,0,2,1])).toBe(4);
    })

    test("should manage longer steps on left and right", () => {
        expect(new Volum().getVolum([1,1,1,2,0,0,2,1,1,1])).toBe(4);
    })

})
