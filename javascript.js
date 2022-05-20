const container = document.querySelector('.container');
let gridSideLength = 16;
for(let i = 1; i <= gridSideLength*gridSideLength; i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.style.width = `${container.clientWidth / gridSideLength}px`;
  square.style.height = `${container.clientHeight / gridSideLength}px`;
  container.appendChild(square);
}

const grid = document.querySelectorAll('.square');
grid.forEach(square => square.addEventListener('mouseenter', setColor));

function setColor(e) {
  let redVal = Math.floor(Math.random()*255);
  let greenVal = Math.floor(Math.random()*255);
  let blueVal = Math.floor(Math.random()*255);
  e.target.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
}