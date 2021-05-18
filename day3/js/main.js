// const spacingEl = document.querySelector("#spacing");
// const blurEl = document.querySelector("#blur");
// const colorEl = document.querySelector("#color");

// const labelSpacing = document.querySelector(".label-spacing");
// const labelBlur = document.querySelector(".label-blur");
// const labelColor = document.querySelector(".label-color");

// const show = document.querySelector(".show");
// const img = document.querySelector(".img");

// function getUnit(el) {
//   return el.dataset.unit;
// }

// window.onload = () => {
//   changeBlur();
//   changeColor();
//   changeSpacing();
// };

// function changeSpacing() {
//   let value = parseInt(spacingEl.value);
//   let unit = getUnit(spacingEl);
//   console.log(`${value} ${unit}`);
//   show.style.padding = value + `${unit}`;
//   labelSpacing.innerHTML = `Spacing: ${value} ${unit}`;
// }

// function changeBlur() {
//   let value = parseInt(blurEl.value);
//   let unit = getUnit(blurEl);
//   img.style.filter = `blur(${value}${unit})`;
//   labelBlur.innerHTML = `Blur:  ${value} ${unit}`;
// }

// function changeColor() {
//   let value = colorEl.value;
//   show.style.backgroundColor = `${value}`;
//   labelColor.innerHTML = `Color: ${value}`;
// }

// spacingEl.addEventListener("change", changeSpacing);
// blurEl.addEventListener("change", changeBlur);
// colorEl.addEventListener("change", changeColor);

const inputs = document.querySelectorAll(".form-control");

function handleChange() {
  let unit = this.dataset.unit || "";
  console.log(this.value + unit);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}

inputs.forEach((input) => input.addEventListener("change", handleChange));
