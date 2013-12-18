function isPrime(n){
 if (typeof isPrime[n] !== "undefined") {
 	isPrime[n].isCached = true;
 	return isPrime[n];
 }
 if (n <= 3) {
 	isPrime[n] = {number : n, isPrime : true, isCached : false};
 } else {
 	isPrime[n] = {number : n, isPrime : true, isCached : false};
 	for(var i=2;i<n-1;i++)
   		if (n % i == 0) 
   			isPrime[n] = {number : n, isPrime : false, isCached : false};
 }
 return isPrime[n];
}