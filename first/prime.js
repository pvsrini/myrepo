/**
 * 
 */

// Returns true if n is prime, false otherwise
var isPrime = function(n)
{
    var i = 2;
    if (n <= 1) return false;
    for (i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
};

// Find first K Prime numbers
var firstkPrime = function(k) {
    var arr = [];
    var count = 0;
    var i = 2;
    while (count < k) {
      if (isPrime(i)) {
        arr.push(i);
        ++count;
      }
      ++i;
    }
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k = 167;

console.log("firstkPrime(" + k + ")");
console.log(fmt(firstkPrime(k)));
