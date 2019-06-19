beforeEach(() => {
  document.body.innerHTML = `<table id="gameboard></table>
    <section id="displayWinner">
    <p>Great !! Yellow player win !</p>
    <button id="restart">Start again</button>
    </section>
    <aside>
      <form>
        <input type="text" name="row" id="row" value="6">
        <input type="text" name="col" id="col" value="7">
        <input type="submit" value="Generate gameboard">
      </form>
    </aside>
    `;
});

describe('restartGame', () => {
  it('should display a form to submit a board when you click to the button start again', () => {
    let btn = document.getElementById('restart');
    btn.click();

    expect(document.querySelector('aside')).toMatchSnapshot();
  });
});
