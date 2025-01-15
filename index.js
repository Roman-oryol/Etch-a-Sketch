const canvas = document.querySelector('#canvas');

let gridSize = 16;

createPixels(gridSize);

function createPixels(gridSize) {
  for (let i = 1; i <= gridSize ** 2; i++) {
    const pixel = document.createElement('div');
    pixel.style.width = `calc(100% / ${gridSize})`;
    pixel.style.height = `calc(100% / ${gridSize})`;
    pixel.style.border = '1px solid #000';
    displayPixel(pixel, canvas);
    pixel.addEventListener('mouseover', paintPixel);
  }
}

function displayPixel(pixel, container) {
  container.appendChild(pixel);
}

function paintPixel(evt) {
  evt.target.classList.add('highlight');
}
