import { initGame } from './initGame.controller';
import { addEventListenerToColumn } from './addEventListenerToColumn.controller';

describe('addEventListenerToColumn', function () {
  it('should call addPawns when column is clicked', function () {
    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];
    initGame(gameboard);

    let column = document.querySelector('#gameboard').childNodes[5]
      .childNodes[0].firstChild;
    let addPawns = jest.fn();

    addEventListenerToColumn(gameboard, addPawns);
    column.click();
    expect(addPawns).toHaveBeenCalled();
  });
});
