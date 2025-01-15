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

function getGridSize() {
  let gridSize = prompt(
    'Enter the number of squares per side for the new grid (e.g., 16 for a 16x16 grid). The number should not exceed 100:'
  );

  if (!gridSize) {
    return;
  }

  gridSize = parseInt(gridSize, 10);

  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return getGridSize();
  }

  return gridSize;
}

console.log(getGridSize());
