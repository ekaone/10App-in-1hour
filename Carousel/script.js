const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

function move() {
  idx++;

  if (idx >= img.length) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 400}px)`;

  setTimeout(move, 2000);
}

move();
