import generateJoke from './js/generateJoke';
import "./styles/main.scss";
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById("laugh");

const generateButton = document.getElementById("jokeBtn");

laughImg.src = laughing;

generateButton.addEventListener('click', generateJoke);

generateJoke();