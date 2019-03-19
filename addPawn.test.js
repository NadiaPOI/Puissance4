const addPawn = require("./addPawn");
const generateGameboard = require("./generateGameboard");

describe("addPawn", function(){
    var gameboard = generateGameboard(6, 7);
    it("should add a pawn to gameboard", function(){
        expect(addPawn(gameboard, 6)).toEqual([["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","","Y"]]);
    })
    it("should add a pawn to gameboard", function(){
        expect(addPawn(gameboard, 0)).toEqual([["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["Y","","","","","","Y"]]);
    })
    it("should add a pawn to gameboard", function(){
        expect(addPawn(gameboard, 0)).toEqual([["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["","","","","","",""],
                                                     ["Y","","","","","",""],
                                                     ["Y","","","","","","Y"]]);
    })    
})