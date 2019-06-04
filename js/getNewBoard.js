export function getNewBoard() {
  let btn = document.createElement('button');
  btn.innerHTML = 'Start again';
  btn.setAttribute('id', 'restart');
  document.getElementById('displayWinner').appendChild(btn);
  btn.addEventListener('click', () => {
    window.location.reload(true);
  });
}
