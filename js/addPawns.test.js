import { initGame } from './initGame';
import { addPawns } from './addPawns';
import { checkIfYellowWinner } from './checkIfYellowWinner';

describe('addPawns', () => {
  it('should add yellow pawn at the last row then add red pawn', () => {
    document.body.innerHTML = '<table id="gameboard"></table>';
    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];

    initGame(gameboard);

    let column = document.querySelector('tr:nth-child(6) td:nth-child(1)')
      .firstChild;
    addPawns(column, gameboard);

    expect(column.src).toBe('http://localhost/img/yellow.png');
    expect(document.querySelector('tr:nth-child(6)').innerHTML).toContain(
      'src="./img/red.png"'
    );
  });

  it('should add yellow pawn at the previous row when row 5 is empty', () => {
    document.body.innerHTML = '<table id="gameboard"></table>';
    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];

    initGame(gameboard);

    let column = document.querySelector('tr:nth-child(6) td:nth-child(1)')
      .firstChild;
    let previousColumn = document.querySelector(
      'tr:nth-child(5) td:nth-child(1)'
    ).firstChild;
    addPawns(column, gameboard);
    addPawns(previousColumn, gameboard);

    expect(column.src).toBe('http://localhost/img/yellow.png');
    expect(previousColumn.src).toBe('http://localhost/img/yellow.png');
  });

  it('should not could add pawn when yellow player win', () => {
    document.body.innerHTML = '<section id="displayWinner"></section>'
      + '<table id="gameboard"><tr id="0"></table>';

    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];

    initGame(gameboard);

    let clickedColumn = document.querySelector(
      'tr:nth-child(6) td:nth-child(1)'
    ).firstChild;
    addPawns(clickedColumn, gameboard);

    let clickedColumn2 = document.querySelector(
      'tr:nth-child(5) td:nth-child(1)'
    ).firstChild;
    addPawns(clickedColumn2, gameboard);

    let clickedColumn3 = document.querySelector(
      'tr:nth-child(4) td:nth-child(1)'
    ).firstChild;
    addPawns(clickedColumn3, gameboard);

    let clickedColumn4 = document.querySelector(
      'tr:nth-child(3) td:nth-child(1)'
    ).firstChild;
    addPawns(clickedColumn4, gameboard);

    checkIfYellowWinner(gameboard, 2, 0, false);

    let clickedColumn5 = document.querySelector(
      'tr:nth-child(2) td:nth-child(1)'
    ).firstChild;
    addPawns(clickedColumn5, gameboard);

    expect(clickedColumn5.src).toBe('http://localhost/img/empty.png');
  });
});
