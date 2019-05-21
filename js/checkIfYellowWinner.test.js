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

    document.body.innerHTML = '<section id="displayWinner"></section>';

    expect(checkIfYellowWinner(gameboard, 2, 0)).toBe(true);
    expect(document.getElementById("displayWinner").innerHTML).toEqual(
      "<p>Great !! Yellow player win !</p>"
    );
    expect(document.getElementById("displayWinner").style.display).toBe(
      "block"
    );
  });
});
