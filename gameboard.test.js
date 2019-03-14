const gameboard = require("./gameboard");

describe("gameboard", function(){
    it("should return a gameboard with 6 rows and 7 columns", function(){
        expect(gameboard(6, 7)).toEqual([["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""]
                                        ]);
    }) 
}) 