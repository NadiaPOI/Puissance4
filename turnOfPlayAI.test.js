const turnOfPlayAI = require("./turnOfPlayAI");

describe("turnOfPlayAI", function() {
  it("should add a red pawn to a random column", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "Y", "", "", ""]
    ];

    var returnOne = function() {
      return 1;
    };

    expect(turnOfPlayAI(gameboard, returnOne())).toEqual([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "R", "", "Y", "", "", ""]
    ]);
  });
});
