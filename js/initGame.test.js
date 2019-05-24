import { initGame } from './initGame.js';

describe('initGame', function () {
  it('should generate <table> element with 6 <tr> and 7 <td> with <img> element for each <td>', function () {
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

    expect(document.getElementById('gameboard')).toMatchSnapshot();
  });
});
