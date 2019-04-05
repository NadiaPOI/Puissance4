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

    var randomPosition = Math.floor(Math.random() * 0);

    expect(turnOfPlayAI(gameboard, randomPosition)).toEqual([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "", "", "Y", "", "", ""]
    ]);
  });
});
