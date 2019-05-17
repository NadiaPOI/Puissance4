import { initGame } from "./initGame";
import { addEventListenerToColumn } from "./addEventListenerToColumn";

describe("addEventListenerToColumn", function() {
  it("should call addPawns when column is clicked", function() {
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

    let column = document.querySelector("#gameboard").childNodes[5]
      .childNodes[0].firstChild;
    let addPawns = jest.fn();

    addEventListenerToColumn(gameboard, addPawns);
    column.click();
    expect(addPawns).toBeCalled();
  });
});
