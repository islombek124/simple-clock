const seconds = document.querySelector('.seconds'),
  minutes = document.querySelector('.minutes'),
  hours = document.querySelector('.hours');

setInterval(() => {
  let sec = new Date().getSeconds() * 6,
    min = new Date().getMinutes() * 6,
    hr = new Date().getHours() * 30;
  seconds.style.transform = `rotate(${180 + sec}deg)`;
  minutes.style.transform = `rotate(${180 + min}deg)`;
  hours.style.transform = `rotate(${180 + hr + (min / 12)}deg)`;
});