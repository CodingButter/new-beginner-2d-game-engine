import "./styles.css";
import Game from "Classes/Game";

const app = document.querySelector("#app");
const title = document.querySelector("#title");
const gameWidth = 600;
const gameHeight = 400;
const parentElement = app;
const gameTitle = "New Beginner Game";

title.innerText = gameTitle;
const game = new Game({ gameWidth, gameHeight, parentElement, gameTitle });
game.start();
