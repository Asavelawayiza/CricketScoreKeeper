let assert = require("assert");
let CricketScoreKeeper = require("../cricket.js");

describe('CricketScoreKeeper test', function () {

    var factoryFunction = CricketScoreKeeper();

    it('if wickets are equal or over 10 should return Game Over', function () {

        var wicket = ["-w-w-w", "-w-w-w", "-w-w-w", "-1-w-3"]
        assert.equal('Game Over', factoryFunction.checkingWickets(wicket));

    })

    it('should return the correct total for wickets', function () {

        var score = ["-w-w"];
        factoryFunction.extractingOvers(score)
        assert.equal(2, factoryFunction.getWicket() );

    })

    it('should return the total of overs in string', function () {

        var score = ["-w-2-3"];
        factoryFunction.extractingOvers(score)
        assert.equal(3, factoryFunction.getWicket() );

    })

    it('should return the correct total for dash', function () {

        var score = ["-"]
        assert.equal(0, factoryFunction.extractingOvers(score));

    })

    it('should return the correct total for dash', function () {

        var score = ["-w-3"]
        assert.equal(0, factoryFunction.extractingOvers(score));

    })

    it('should return the correct total', function () {

        var score = ["-1-3-w"]
        factoryFunction.extractingOvers(score)
        assert.equal(4, factoryFunction.getTotal());

    })

    it('should return the correct total', function () {

        var score = ["-3-3-3"]
        factoryFunction.extractingOvers(score)
        assert.equal(12, factoryFunction.getTotal());

    })


});