import { checkIfYellowWinner } from "./checkIfYellowWinner";

describe("checkIfYellowWinner", () => {
  it("should display a modal message when yellow player win", () => {
    let gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["Y", "R", "", "", "R", "R", ""]
    ];

    expect(checkIfYellowWinner(gameboard, 2, 0)).toBe(true);
  });
});
