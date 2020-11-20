const text = "Haii 👋, I am Eka, Front-end Developer, Welcome to my Site 🚀";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length - 1) {
    setTimeout(() => {
      index = 0;
    }, 600);
  }
}

setInterval(writeText, 100);
