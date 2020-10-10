const numberStr = document.querySelector('.content').getAttribute('data-episode-number');
const number = parseInt(numberStr, 10);
document.querySelector('.content').innerHTML = new Episodes().renderEpisode(number);

