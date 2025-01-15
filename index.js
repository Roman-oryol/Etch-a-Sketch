const canvas = document.querySelector('#canvas');
const setGridSizeBtn = document.querySelector('#grid-size-btn');
const resetBtn = document.querySelector('#reset');

let gridSize = 16;

createPixels(gridSize);

setGridSizeBtn.addEventListener('click', resizeGrid);
resetBtn.addEventListener('click', reset);

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
  const pixel = evt.target;

  if (pixel.style.backgroundColor === '') {
    pixel.style.backgroundColor = getRandomColor();
    return;
  }

  let pixelColor = pixel.style.backgroundColor;
  let pixelOpacity = Number(pixelColor.slice(-4, -1));

  if (pixelOpacity < 1) {
    pixelOpacity += 0.1;
    pixel.style.backgroundColor = pixelColor.replace(
      pixelColor.slice(-4, -1),
      String(pixelOpacity)
    );
  }
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

function resizeGrid() {
  gridSize = getGridSize();
  if (gridSize === undefined) {
    return;
  }
  canvas.innerHTML = '';
  createPixels(gridSize);
}

function getRandomColor() {
  const getRandomValue = () => Math.floor(Math.random() * 256);
  const r = getRandomValue();
  const g = getRandomValue();
  const b = getRandomValue();

  return `rgba(${r}, ${g}, ${b}, 0.1)`;
}

function reset() {
  canvas.innerHTML = '';
  createPixels(gridSize);
}
