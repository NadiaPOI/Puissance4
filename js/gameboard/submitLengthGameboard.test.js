import { submitLengthGameboard } from './submitLengthGameboard.controller';

describe('submitLengthGameboard', () => {
  it('should generate a gameboard when submit form with rows and columns values', () => {
    document.body.innerHTML = `<button id="start">Start a Game</button>
    <aside>
      <form action="./index.html" method="post">
        <input type="text" name="row" id="row" value="6">
        <input type="text" name="col" id="col" value="7">
        <input type="submit" value="Generate gameboard">
      </form>
    </aside>`;

    submitLengthGameboard();

    let btn = document.querySelector('input[type="submit"]');
    btn.click();

    expect(document.getElementById('gameboard')).toMatchSnapshot();
  });
});
