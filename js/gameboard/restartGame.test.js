import { restartGame } from './restartGame.controller';

describe('restartGame', () => {
  it('should generate a new gameboard when you click to the button start again', () => {
    document.body.innerHTML = `<table id="gameboard></table>
    <section id="displayWinner" s>
    <p>Great !! Yellow player win !</p>
    <button id="restart">Start again</button>
    </section>`;

    restartGame();

    let btn = document.getElementById('restart');
    window.location.reload = jest.fn();
    btn.click();

    expect(window.location.reload).toHaveBeenCalled();
  });
});
