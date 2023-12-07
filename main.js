let button = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let quoteText = document.querySelector("#quote");
let authorText = document.querySelector("#author");
let tagsText = document.querySelector("#tags");
let card = document.querySelector(".card");

let autoplay;

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getData = async () => {
  const response = await fetch("http://quotable.io/random");
  const data = await response.json();
  quoteText.innerText = data.content;
  authorText.innerText = data.author;
  tagsText.innerText = data.tags;
  card.style.backgroundColor = getRandomColor();
};

const startAutoplay = () => {
  autoplay = setInterval(getData, 5000);
};

const stopAutoplay = () => {
  clearInterval(autoplay);
};

button.addEventListener("click", getData);
btn2.addEventListener("click", startAutoplay);
btn3.addEventListener("click", stopAutoplay);
