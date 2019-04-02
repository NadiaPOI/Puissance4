const isWinner = require("./isWinner");

describe("isWinner", function() {
  it("should return true if player is winner when pawns are aligned horizontally", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["Y", "Y", "Y", "", "", "", ""],
      ["Y", "Y", "R", "Y", "", "", ""],
      ["Y", "R", "R", "R", "R", "", ""]
    ];

    expect(isWinner(gameboard, 5, 4, "R")).toBe(true);
  });

  it("should return true if player is winner when pawns are aligned vertically", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "R", "", "", "", "", ""],
      ["Y", "R", "", "", "", "", ""],
      ["Y", "R", "", "", "", "", ""]
    ];

    expect(isWinner(gameboard, 5, 0, "Y")).toBe(true);
  });

  it("should return true if player is winner when pawns are aligned diagonally left", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "R", "", "Y", "", "", ""],
      ["R", "R", "Y", "Y", "", "", ""],
      ["Y", "Y", "R", "R", "", "", ""],
      ["Y", "R", "R", "Y", "", "", ""]
    ];

    expect(isWinner(gameboard, 2, 3, "Y")).toBe(true);
  });

  it("should return false if not winner", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "R", "", "Y", "", "", ""],
      ["R", "R", "Y", "Y", "", "", ""],
      ["Y", "Y", "R", "R", "", "", ""],
      ["R", "R", "R", "Y", "", "", ""]
    ];

    expect(isWinner(gameboard, 2, 3, "Y")).toBe(false);
  });

  it("should return true if player is winner when pawns are aligned diagonally rigth", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "R", "", "Y", "", "", ""],
      ["R", "R", "R", "Y", "", "", ""],
      ["Y", "Y", "R", "R", "", "", ""],
      ["R", "R", "R", "Y", "R", "", ""]
    ];

    expect(isWinner(gameboard, 5, 4, "R")).toBe(true);
  });
});
