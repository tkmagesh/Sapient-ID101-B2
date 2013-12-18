function isPrime(n){
 if (typeof isPrime[n] !== "undefined") {
 	console.log("result returned from cache");
 	return isPrime[n];
 }
 if (n <= 3) {
 	isPrime[n] = true;
 } else {
 	isPrime[n] = true;
 	for(var i=2;i<n-1;i++)
   		if (n % i == 0) 
   			isPrime[n] = false;
 }
 console.log("freshly brewed result!!");
 return isPrime[n];
}