// Generates Random color for rgb color format
const randomColorRGB = () => {
  let r = Math.trunc(Math.random() * 255 + 1);
  let g = Math.trunc(Math.random() * 255 + 1);
  let b = Math.trunc(Math.random() * 255 + 1);

  return `rgb(${r},${g},${b})`;
};

// Generates Random color for Hexadecimal color format
const randomColorHex = () => {
  const hexString = "0123456789ABCDEF";
  let prefix = "#";
  for (let i = 0; i < 6; i++) {
    prefix += hexString[Math.floor(Math.random() * 16)];
  }

  return prefix;
};

// changing background color of the body
function changeColor() {
  document.body.style.backgroundColor = randomColorRGB();
}

// adding event listener to button
document
  .querySelector(".changeBgColorBtn")
  .addEventListener("click", changeColor);
