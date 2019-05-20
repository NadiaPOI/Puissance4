import { checkIfRedWinner } from "./checkIfRedWinner";

describe("checkIfRedWinner", () => {
  it("should display a modal message when red player win", () => {
    let gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "R", "R", "R", "R", "Y", ""]
    ];

    expect(checkIfRedWinner(gameboard, 5, 2)).toBe(true);
  });
});
