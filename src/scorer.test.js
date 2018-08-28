import Scorer from "./scorer"

describe("Score", () => {

    let scorer

    beforeAll(() => {
        scorer = new Scorer()
    })

    test("Should be 'nul'", () => {
        const score = scorer.getScore(0, 0)
        expect(score).toBe("Score nul")
    })

    test("Should be '15-0'", () => {
        const score = scorer.getScore(1, 0)
        expect(score).toBe("15-0")
    })

    test("Should be '30-0'", () => {
        const score = scorer.getScore(2, 0)
        expect(score).toBe("30-0")
    })

    test("Should be '0-15'", () => {
        const score = scorer.getScore(0, 1)
        expect(score).toBe("0-15")
    })

    test("Should be '0-40'", () => {
        const score = scorer.getScore(0, 3)
        expect(score).toBe("0-40")
    })

    test("Should be '15A'", () => {
        const score = scorer.getScore(1, 1)
        expect(score).toBe("15A")
    })

    test("Should be '30A'", () => {
        const score = scorer.getScore(2, 2)
        expect(score).toBe("30A")
    })

    test("Should be '40A'", () => {
        const score = scorer.getScore(3, 3)
        expect(score).toBe("40A")
    })

    test("Should be 'Avantage Joueur 1'", () => {
        const score = scorer.getScore(4, 3)
        expect(score).toBe("Avantage Joueur 1")
    })

    test("Should be 'Avantage Joueur 2'", () => {
        const score = scorer.getScore(3, 4)
        expect(score).toBe("Avantage Joueur 2")
    })

    test("Should be 'Egalité'", () => {
        const score = scorer.getScore(4, 4)
        expect(score).toBe("Egalité")
    })

    test("Should be '40'", () => {
        const score = scorer.getScore(4, 4)
        expect(score).toBe("Egalité")
    })

    test("Should be 'Jeu Joueur 1'", () => {
        const score = scorer.getScore(4, 2)
        expect(score).toBe("Jeu Joueur 1")
    })

})