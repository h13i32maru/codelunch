const numberStr = location.href.replace('/index.html', '').split('/').reverse()[0];
const number = parseInt(numberStr, 10);
document.querySelector('.content').innerHTML = new Episodes().renderEpisode(number);

