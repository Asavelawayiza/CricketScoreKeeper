module.exports = function CricketScoreKeeper() {

    var wicket = 0;
    var total = 0;
    var error = "Game Over"

    function getWicket() {
        return wicket;
    }

    function checkingWickets(wicket) {

        if (wicket <= 10) {
            wickets.push(wicket);
            return true;
        }
        else {
            return error;
        }
    }

    function extractingOvers(overs) {
        var wicketScore = overs[0].split('')

        for (var i = 0; i < wicketScore.length; i++) {
            var score = wicketScore[i];

            if (score === 'w') {
                wicket += 1;
            }

            else if (score === '4') {
                total += 4;
            }
        }
        
        return total;

    }

    function getTotal() {
        return total;
    }



    return {
        checkingWickets,
        extractingOvers,
        getWicket,
        getTotal
    }


}
