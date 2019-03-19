const addPawn = require("./addPawn");
const generateGameboard = require("./generateGameboard");

describe("addPawn", function(){
    it("should add a pawn to gameboard", function(){
        var gameboard = generateGameboard(6, 7);
        expect(addPawn(gameboard, 6)).toEqual([["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","","Y"]]);
    })
    it("should add a pawn to gameboard", function(){
        var gameboard = generateGameboard(6, 7);
        expect(addPawn(gameboard, 0)).toEqual([["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["Y","","","","","",""]]);
    })
    it("should add a pawn to gameboard", function(){
        var gameboard = generateGameboard(6, 7);
        gameboard[5][0] = "Y";
        expect(addPawn(gameboard, 0)).toEqual([["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["","","","","","",""],
                                               ["Y","","","","","",""],
                                               ["Y","","","","","",""]]);
    })    
})