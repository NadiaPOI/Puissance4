const addPawn = require("./addPawn");

describe("addPawn", function(){
    it("should add a pawn to gameboard", function(){
        expect(addPawn(5, 6)).toEqual([["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","","Y"]]);
    })
    it("should add a pawn to gameboard", function(){
        expect(addPawn(5, 0)).toEqual([["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","",""],
                                       ["","","","","","",""],
                                       ["Y","","","","","",""]]);
    })
})