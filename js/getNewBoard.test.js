import { getNewBoard } from './getNewBoard';

describe('should reload when you click to the button start again', () => {
  it('getNewBoard', () => {
    document.body.innerHTML = '<section id="displayWinner"></section>'
     + '<table id="gameboard"></table>';
    getNewBoard();
    let btn = document.getElementById('restart');
    window.location.reload = jest.fn();
    btn.click();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
