import './style.scss';
import about from './index.html?raw';

const app = document.querySelector('#app');
app.innerHTML = about;