const container = document.querySelector('.container');
let gridSideLength = 16;
for(let i = 1; i <= gridSideLength*gridSideLength; i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.style.width = `${container.clientWidth / gridSideLength}px`;
  square.style.height = `${container.clientHeight / gridSideLength}px`;
  container.appendChild(square);
}
