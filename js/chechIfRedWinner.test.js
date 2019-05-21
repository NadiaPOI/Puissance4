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

    document.body.innerHTML = '<section id="displayWinner"></section>';
    expect(checkIfRedWinner(gameboard, 5, 2)).toBe(true);
    expect(document.getElementById("displayWinner").innerHTML).toEqual(
      "<p>Great !! Red player win !</p>"
    );
    expect(document.getElementById("displayWinner").style.display).toBe(
      "block"
    );
  });
});
