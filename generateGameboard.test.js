const generateGameboard = require("./generateGameboard");

describe("generateGameboard", function(){
    it("should return a gameboard with 6 rows and 7 columns", function(){
        expect(generateGameboard(6, 7)).toEqual([["","","","","","",""],
                                                ["","","","","","",""],
                                                ["","","","","","",""],
                                                ["","","","","","",""],
                                                ["","","","","","",""],
                                                ["","","","","","",""]]);
    })
    it("should return a gameboard with 1 row and 1 columns", function(){
        expect(generateGameboard(1, 1)).toEqual([[""]]);
    })
    it("should return a gameboard with 1 row and 1 columns", function(){
        expect(generateGameboard(4, 3)).toEqual([["","",""],
                                                 ["","",""],
                                                 ["","",""],
                                                 ["","",""]]);
    })
    it("should return a error message", function(){
        expect(function() {generateGameboard(-1, 2)}).toThrow();
    })
}) 