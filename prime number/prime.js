// Program to check if the number is prime or not
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

// Example usage:
console.log(isPrime(23)); // Output: 23 is a prime number
