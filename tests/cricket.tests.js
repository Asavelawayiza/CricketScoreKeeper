let assert = require("assert");
let CricketScoreKeeper = require("../cricket.js");

describe('CricketScoreKeeper test', function () {
    
    it('if wickets are equal or over 10 should return Game Over', function () {

        var wicketTotal = checkWickets(wicket)
        var wicket = '-w-w-w'
        assert.equal(CricketScoreKeeper(wicketTotal), 'Game Over');

    })

    it('should return correct number of wickets left', function () {

        var wicketTotal = checkWickets(wicket)
        var wicket = '-w-1-w'
        assert.equal(CricketScoreKeeper(wicketTotal), 8);

    })
});