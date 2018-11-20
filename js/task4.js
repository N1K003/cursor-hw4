/*
Implement Promise inside Promise, haha.
The second Promise should call function from task #3, and you should use async and await.
Send us Github Pages link, as usual.
*/

document.getElementById('promiseBtn').onclick = promiseInPromise;

async function promiseInPromise() {
    return new Promise(resolve => setTimeout(() => {
        resolve(alert('Hello from first promise'));
    }, 10000)).then(sayHello);
}