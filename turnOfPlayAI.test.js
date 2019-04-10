import { turnOfPlayAI, findEmptyColumn } from "./turnOfPlayAI";

describe("turnOfPlayAI", function() {
  it("should add a red pawn to a random column when column is empty", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "Y", "", "", "", "", ""]
    ];

    var randomFunction = () => 0;

    expect(turnOfPlayAI(gameboard, randomFunction)).toEqual([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "Y", "", "", "", "", ""]
    ]);
  });

  it("should add a red pawn to another colum when column is full", function() {
    var gameboard = [
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["R", "", "R", "", "", "", ""],
      ["Y", "", "Y", "Y", "", "", ""]
    ];

    var randomFunction = () => 0;

    expect(turnOfPlayAI(gameboard, randomFunction)).toEqual([
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["Y", "", "", "", "", "", ""],
      ["R", "", "", "", "", "", ""],
      ["R", "", "R", "", "", "", ""],
      ["Y", "R", "Y", "Y", "", "", ""]
    ]);
  });

  it("should add a red pawn to another colum when column is full", function() {
    var gameboard = [
      ["", "Y", "", "", "", "", ""],
      ["", "R", "", "", "", "", ""],
      ["", "Y", "", "", "", "", ""],
      ["", "R", "", "", "", "", ""],
      ["", "R", "R", "", "", "", ""],
      ["", "Y", "Y", "Y", "", "", ""]
    ];

    var randomFunction = () => 1;

    expect(turnOfPlayAI(gameboard, randomFunction)).toEqual([
      ["", "Y", "", "", "", "", ""],
      ["", "R", "", "", "", "", ""],
      ["", "Y", "", "", "", "", ""],
      ["", "R", "", "", "", "", ""],
      ["", "R", "R", "", "", "", ""],
      ["", "Y", "Y", "Y", "", "", "R"]
    ]);
  });

  it("should add a red pawn to random colum when column is empty", function() {
    var gameboard = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "", "Y", "Y", "", "", ""]
    ];

    var randomFunction = () => 1;

    expect(turnOfPlayAI(gameboard, randomFunction)).toEqual([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["R", "", "Y", "Y", "", "", "R"]
    ]);
  });
});
