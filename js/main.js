"use strict";

const items = document.querySelectorAll('.counter__numbers');
const counterElement = document.querySelector('.counter');
let futureDate = new Date(2023, 8, 1, 8, 0, 0).getTime();

function getCountTime() {
    const now = new Date().getTime();
    const distance = futureDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    items.forEach(function(item, index) {
        item.textContent = values[index];
    })

    if (distance < 0) {
        counterElement.innerHTML = '<h4 class="counter__message">Time ran out</h4>';
    }
}

let counter = setInterval(getCountTime, 1000);

getCountTime();