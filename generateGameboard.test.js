const generateGameboard = require("./generateGameboard");

describe("generateGameboard", function(){
    it("should return a gameboard with 6 rows and 7 columns", function(){
        expect(generateGameboard(6, 7)).toEqual([["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""],
                                         ["","","","","","",""]
                                        ]);
    })    
}) 