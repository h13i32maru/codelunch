const matched = location.href.match(/\/(\d+)\//);
const number = parseInt(matched[1], 10);
document.querySelector('.content').innerHTML = new Episodes().renderEpisode(number);

