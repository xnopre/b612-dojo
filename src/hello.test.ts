import Hello from "./hello"

describe("Hello", () => {

    test("should work", () => {

        expect(new Hello().ping("coucou")).toBe("pong coucou")

    })

})
