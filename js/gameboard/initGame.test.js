import { initGame } from './initGame.controller';

describe('initGame', function () {
  it('should generate <table> element with 6 <tr> and 7 <td> with <img> element for each <td>', function () {
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
