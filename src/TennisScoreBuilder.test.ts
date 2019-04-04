import TennisScoreBuilder from "./TennisScoreBuilder"

describe("TennisScoreBuilder", () => {

    const tennis = new TennisScoreBuilder();

    const testCases: any[] = [
        [0, 0, 'Score nul'],
        [1, 0, '15-0'],
        [0, 1, '0-15'],
        [1, 3, '15-40'],
        [3, 1, '40-15'],
        [1, 1, '15A'],
        [4, 4, 'Égalité'],
        [6, 6, 'Égalité'],
        [4, 3, 'Avantage joueur 1'],
        [4, 5, 'Avantage joueur 2'],
        [5, 6, 'Avantage joueur 2'],
        [4, 0, 'Jeu joueur 1'],
        [6, 4, 'Jeu joueur 1'],
        [2, 4, 'Jeu joueur 2'],
    ]

    testCases.forEach(([pointPlayer1, pointPlayer2, expectedResult]) => {
        test(expectedResult, () => {
            const score = tennis.getScore(pointPlayer1, pointPlayer2)
            expect(score).toBe(expectedResult)
        })
    })

})
