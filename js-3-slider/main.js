let images = document.getElementById("images");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let img = document.querySelectorAll("#images img");

let counter = 0;

function slideImg() {
  if (counter > img.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = img.length - 1;
  }
  images.style.transform = `translate(-${counter * 400}px)`;
}

nextBtn.addEventListener("click", function changes() {
  counter++;
  slideImg();
});

prevBtn.addEventListener("click", function changes() {
  counter--;
  slideImg();
});
