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

  it("should add a red pawn to another colum when colum is full", function() {
    var gameboard = [
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["R", "", "R", "", "", "", ""],
      ["Y", "", "Y", "Y", "", "", ""]
    ];

    var randomPosition = Math.floor(Math.random() * 0) + 1;

    expect(turnOfPlayAI(gameboard, randomPosition)).toEqual([
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["R", "", "R", "", "", "", ""],
      ["Y", "R", "Y", "Y", "", "", ""]
    ]);
  });
});
