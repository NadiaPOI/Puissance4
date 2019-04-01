const isWinner = require("./isWinner");

describe("isWinner", function() {
  it("should return if player is winner when pawns are aligned horizontally", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["Y", "Y", "Y", "", "", "", ""],
      ["Y", "Y", "R", "Y", "", "", ""],
      ["Y", "R", "R", "R", "R", "", ""]
    ];

    expect(isWinner(gameboard, 5, 4, "R")).toBe("You win!! ;-)");
  });

  it("should return if player is winner when pawns are aligned vertically", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "R", "", "", "", "", ""],
      ["Y", "R", "", "", "", "", ""],
      ["Y", "R", "", "", "", "", ""]
    ];

    expect(isWinner(gameboard, 5, 0, "Y")).toBe("You win!! ;-)");
  });
});
