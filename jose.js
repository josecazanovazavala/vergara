const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector("#slider");
const slidercontenedor = document.querySelectorAll(".slidercontenedor1");

let counter = 0;
let widthImage = 100 / slidercontenedor.length;
let operacion = 0;

right.addEventListener("click", movieright);
left.addEventListener("click", movieleft);

function movieright() {
  if (counter >= slidercontenedor.length - 1) {
    counter = 0;
    operacion = 0;
  } else {
    counter++;
    operacion = counter * 100;
  }

  slider.style.transform = `translateX(-${operacion}%)`;
  slider.style.transition = "all ease 0.4s";
}

function movieleft() {
  if (counter <= 0) {
    counter = slidercontenedor.length - 1;
  } else {
    counter--;
  }

  operacion = counter * 100;
  slider.style.transform = `translateX(-${operacion}%)`;
  slider.style.transition = "all ease 0.4s";
}
