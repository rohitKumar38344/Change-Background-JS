document
  .querySelector(".changeBgColorBtn")
  .addEventListener("click", changeColor);

function changeColor() {
  let r = Math.trunc(Math.random() * 255 + 1);
  let g = Math.trunc(Math.random() * 255 + 1);
  let b = Math.trunc(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}
