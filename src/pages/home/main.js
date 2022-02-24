import './style.scss';

// const home = require('/src/pages/home/index.html?raw');
const home = require('/src/pages/home/index.html?raw');

const app = document.querySelector("#app");
app.innerHTML = home;

