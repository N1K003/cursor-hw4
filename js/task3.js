/*
Implement function, that will return result after 10 second. Send us Github Pages link.
*/

document.getElementById('counterBtn').onclick = helloWrapper;

let intervalId = 0;

async function helloWrapper() {
    setTimeout(sayHello, 10000);
    intervalId = setInterval(updateCounterValue, 999);

}

function sayHello() {
    alert('Hello, visitor')
}

function updateCounterValue() {
    const element = document.getElementById('counter');
    const value = parseInt(element.innerText);
    if (value === 0) {
        clearInterval(intervalId)
        element.innerText = '10'
    } else {
        element.innerText = (value - 1) + '';
    }
}