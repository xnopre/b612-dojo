import TennisScoreBuilder from "./TennisScoreBuilder"

describe("TennisScoreBuilder", () => {

    const tennis = new TennisScoreBuilder();

    test("should return score nul", () => {
        const score = tennis.getScore(0, 0)
        expect(score).toBe("Score nul")
    })

    test("should return score 15-0", () => {
        const score = tennis.getScore(1, 0)
        expect(score).toBe("15-0")
    })

    test("should return score 0-15", () => {
        const score = tennis.getScore(0, 1)
        expect(score).toBe("0-15")
    })

    test("should return score 15-40", () => {
        const score = tennis.getScore(1, 3)
        expect(score).toBe("15-40")
    })

    test("should return score 40-15", () => {
        const score = tennis.getScore(3, 1)
        expect(score).toBe("40-15")
    })

    test("should return score 15A", () => {
        const score = tennis.getScore(1, 1)
        expect(score).toBe("15A")
    })

    test("should return Avantage joueur 1", () => {
        const score = tennis.getScore(4, 3)
        expect(score).toBe("Avantage joueur 1")
    })

    test("should return Égalité", () => {
        const score = tennis.getScore(4, 4)
        expect(score).toBe("Égalité")
    })

    test("should return Avantage joueur 2", () => {
        const score = tennis.getScore(4, 5)
        expect(score).toBe("Avantage joueur 2")
    })

})
