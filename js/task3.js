/*
Implement function, that will return result after 10 second. Send us Github Pages link.
*/

document.querySelector('#counterBtn').onclick = helloWrapper;

let intervalId = 0;

async function helloWrapper() {
    intervalId = setInterval(updateCounterValue, 990);
    return await sayHello();
}

async function sayHello() {
    return new Promise(() => setTimeout(() => alert('Hello, visitor'), 10000));
}

function updateCounterValue() {
    const element = document.querySelector('#counter');
    const value = parseInt(element.innerText);
    if (value === 0) {
        clearInterval(intervalId);
        element.innerText = '10'
    } else {
        element.innerText = (value - 1) + '';
    }
}