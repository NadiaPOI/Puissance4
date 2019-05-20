import { initGame } from "./initGame";
import { addPawns } from "./addPawns";

describe("addPawns", () => {
  it("should add yellow pawn at the last row then add red pawn", () => {
    document.body.innerHTML = '<table id="gameboard"></table>';
    let gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];

    initGame(gameboard);

    let column = document.querySelector("tr:nth-child(6) td:nth-child(1)")
      .firstChild;
    addPawns(column, gameboard);

    expect(column.src).toBe("http://localhost/img/yellow.png");
    expect(document.querySelector("tr:nth-child(6)").innerHTML).toContain(
      'src="./img/red.png"'
    );
  });

  it("should add yellow pawn at the previous row when row 5 is empty", () => {
    document.body.innerHTML = '<table id="gameboard"></table>';
    let gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];

    initGame(gameboard);

    let column = document.querySelector("tr:nth-child(6) td:nth-child(1)")
      .firstChild;
    let previousColumn = document.querySelector(
      "tr:nth-child(5) td:nth-child(1)"
    ).firstChild;
    addPawns(column, gameboard);
    addPawns(previousColumn, gameboard);

    expect(column.src).toBe("http://localhost/img/yellow.png");
    expect(previousColumn.src).toBe("http://localhost/img/yellow.png");
  });

  it("should not add red pawn when red player win", () => {
    document.body.innerHTML = '<table id="gameboard"></table>';
    let gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];

    initGame(gameboard);

    let firstColumn = document.querySelector("tr:nth-child(6) td:nth-child(1)")
      .firstChild;
    let previousColumn = document.querySelector(
      "tr:nth-child(5) td:nth-child(1)"
    ).firstChild;
    let thirdColumn = document.querySelector("tr:nth-child(4) td:nth-child(1)")
      .firstChild;

    let fourthColumn = document.querySelector("tr:nth-child(3) td:nth-child(1)")
      .firstChild;
    let columnClicked = document.querySelector(
      "tr:nth-child(2) td:nth-child(1)"
    ).firstChild;
    addPawns(firstColumn, gameboard);
    addPawns(previousColumn, gameboard);
    addPawns(thirdColumn, gameboard);
    addPawns(fourthColumn, gameboard);
    addPawns(columnClicked, gameboard);

    expect(columnClicked.src).not.toBe("http://localhost/img/yellow.png");
  });
});
