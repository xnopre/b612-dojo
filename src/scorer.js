export default class Scorer {

    getScore(scoreTeamA, scoreTeamB) {
        if (this.scoreAreNul(scoreTeamA, scoreTeamB)){
            return "Score nul"
        }
        if (scoreTeamA > 3 || scoreTeamB > 3) {
            if (scoreTeamA - scoreTeamB == 2) return "Jeu Joueur 1"
            if (scoreTeamA == scoreTeamB) return "Egalité"
            if (scoreTeamA > scoreTeamB) return "Avantage Joueur 1"
            return "Avantage Joueur 2"
        }
        if (this.scoreAreEquals(scoreTeamA, scoreTeamB)){
            return this.formatScore(scoreTeamA)+"A"
        }

        return this.formatScore(scoreTeamA)+"-"+this.formatScore(scoreTeamB)
    }

    scoreAreNul(scoreTeamA, scoreTeamB) {
        return scoreTeamA === 0 && scoreTeamB === 0;
    }

    scoreAreEquals(scoreTeamA, scoreTeamB) {
        return scoreTeamA === scoreTeamB;
    }

    formatScore(n) {
        if (n == 0) return "0"
        if (n == 1) return "15"
        if (n == 2) return "30"
        return "40"
    }
}