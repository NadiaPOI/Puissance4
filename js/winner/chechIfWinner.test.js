import { checkIfWinner } from './checkIfWinner.controller';

describe('checkIfWinner', () => {
  it('should display a modal message when red player win', () => {
    document.body.innerHTML = '<section id="displayWinner"></section>';

    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', 'R', 'R', 'R', 'R', 'Y', '']
    ];

    checkIfWinner(gameboard, 5, 2, 'R');

    expect(document.getElementById('displayWinner').innerHTML).toEqual(
      '<p>Great !! Red player win !</p><button id="restart">Start again</button>'
    );
    expect(document.getElementById('displayWinner').style.display).toBe(
      'block'
    );
  });

  it('should return true when red player win', () => {
    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', 'R', 'R', 'R', 'R', 'Y', '']
    ];

    document.body.innerHTML = '<section id="displayWinner"></section>';

    expect(checkIfWinner(gameboard, 5, 2, 'R')).toBe(true);
  });

  it('should display a modal message when yellow player win', () => {
    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', 'R', '', '', 'R', 'R', '']
    ];

    document.body.innerHTML = '<section id="displayWinner"></section>';

    checkIfWinner(gameboard, 2, 0, 'Y');

    expect(document.getElementById('displayWinner').innerHTML).toEqual(
      '<p>Great !! Yellow player win !</p><button id="restart">Start again</button>'
    );
    expect(document.getElementById('displayWinner').style.display).toBe('block');
  });
  it('should return true when yellow player win', () => {
    let gameboard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', '', '', '', '', '', ''],
      ['Y', 'R', '', '', 'R', 'R', '']
    ];

    document.body.innerHTML = '<section id="displayWinner"></section>';

    expect(checkIfWinner(gameboard, 2, 0, 'Y')).toBe(true);
  });
});
