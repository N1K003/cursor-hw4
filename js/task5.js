/*
Implement recursive to print only PRIME numbers from n to 1.
I would like to run function func(10) and see 7, 5, 3, 2, 1.
Please send us Github Page link.
*/

document.getElementById('primeBtn').onclick = primesWrapper;

function primesWrapper() {
    const value = parseInt(document.getElementById('primeInput').value);
    const primes = getPrimes(value);

    document.getElementById('primeNumbers').innerHTML = primes === null ? 'Failed to find prime numbers for your input' : primes.join(', ');
}

function getPrimes(value) {
    if (isNaN(value) || value < 0) {
        return null;
    }

    let primes = [];

    for (let i = value; i >= 1; i--) {
        if (isPrime(i, 2))
            primes.push(i);
    }

    return primes;
}

function isPrime(value, divider) {
    if (value <= 2)
        return (value === 2);
    if (value % divider === 0)
        return false;
    if (divider * divider > value)
        return true;

    return isPrime(value, divider + 1);
}
