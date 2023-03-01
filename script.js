let hexCode = "#2211AB"; //default value
let rgbCode = "rgb(23, 42, 88)"; // default value
const outputSection = document.querySelector("h2");

// Generates Random color for rgb color format
const randomRGBColor = () => {
  let r = Math.trunc(Math.random() * 255 + 1);
  let g = Math.trunc(Math.random() * 255 + 1);
  let b = Math.trunc(Math.random() * 255 + 1);

  rgbCode = `rgb(${r},${g},${b})`;
  return rgbCode;
};

// Generates Random color for Hexadecimal color format
const randomHexColor = () => {
  const hexString = "0123456789ABCDEF";
  let prefix = "#";
  for (let i = 0; i < 6; i++) {
    prefix += hexString[Math.floor(Math.random() * 16)];
  }
  hexCode = prefix;
  return hexCode;
};

// Applying RGB background color to the body
function changeRGBColor() {
  document.body.style.backgroundColor = randomRGBColor();
  outputSection.innerText = rgbCode;
}

// Applying Hexadecimal background color to the body
function changeHexColor() {
  document.body.style.backgroundColor = randomHexColor();
  outputSection.innerText = hexCode;
}

// adding event listener to button
document.querySelector(".hexBtn").addEventListener("click", changeHexColor);

document.querySelector(".rgbBtn").addEventListener("click", changeRGBColor);
