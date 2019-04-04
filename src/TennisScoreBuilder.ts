export default class Tennis {

    mapping_scores: number[] = [0, 15, 30, 40]

    getScore(pointsPlayer1: number, pointsPlayer2: number) {
        const scoreAreNuls = pointsPlayer1 === 0 && pointsPlayer2 === 0
        const scoreAreEquals  = pointsPlayer1 == pointsPlayer2
        const beforeAdvantageOrWin = pointsPlayer1 < 4 && pointsPlayer2 < 4

        if (scoreAreNuls) {
            return "Score nul"
        }

        if (beforeAdvantageOrWin) {
            if (scoreAreEquals) {
                return `${this.mapping_scores[pointsPlayer1]}A`
            }

            return `${this.mapping_scores[pointsPlayer1]}-${this.mapping_scores[pointsPlayer2]}`
        }

        if (pointsPlayer1 - pointsPlayer2 >= 2) {
            return 'Jeu joueur 1'
        }

        if (pointsPlayer2 - pointsPlayer1 >= 2) {
            return 'Jeu joueur 2'
        }

        if(pointsPlayer2 - pointsPlayer1 === 1){
            return 'Avantage joueur 2'
        }

        if(pointsPlayer1 - pointsPlayer2 === 1){
            return 'Avantage joueur 1'
        }

        return 'Égalité'
    }

}
