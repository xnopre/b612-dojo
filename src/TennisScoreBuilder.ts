export default class Tennis {

    mapping_scores: number[] = [0, 15, 30, 40]

    getScore(pointsPlayer1: number, pointsPlayer2: number) {
        function scoreAreNuls() {
            return pointsPlayer1 === 0 && pointsPlayer2 === 0;
        }
        function scoreAreEquals() {
            return pointsPlayer1 == pointsPlayer2;
        }


        if (scoreAreNuls()) {
            return "Score nul"
        }

        function isFirstStep() {
            return pointsPlayer1 < 4 && pointsPlayer2 < 4
        }

        if (isFirstStep()) {
            if (scoreAreEquals()) {
                return `${this.mapping_scores[pointsPlayer1]}A`
            }

            return `${this.mapping_scores[pointsPlayer1]}-${this.mapping_scores[pointsPlayer2]}`
        }





        if(pointsPlayer2===4){
            return 'Égalité'
        }

        if(pointsPlayer2===5){
            return 'Avantage joueur 2'
        }
        if (pointsPlayer1===4){
            return 'Avantage joueur 1'
        }

        return `${this.mapping_scores[pointsPlayer1]}-${this.mapping_scores[pointsPlayer2]}`
    }

}
