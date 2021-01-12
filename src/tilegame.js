import "./styles.css";
import Game from "./Classes/Game";

const app = document.querySelector("#app");

const gameWidth = 400;
const gameHeight = 400;
const parentElement = app;
const gameTitle = "TileGame";

const game = new Game({ gameWidth, gameHeight, parentElement, gameTitle });
game.start();
