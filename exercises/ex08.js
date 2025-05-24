/*
"Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:

Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number

TIP: A number x is divisible by a number y if the answer to x / y has a remainder of 0. 
For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. 
You can check if a number is divisible by another number by checking if x % y === 0.

*/

var x = 1;
let y = 1

for(let i=1; i<=100;i++){
  if(x % 3 === 0){
    console.log("Fizz")
  }else if(x % 5 === 0){
    console.log("Buzz")
  }else if(x % 3 === 0 && x % 5 === 0 ){
    console.log("FizzBuzz")
  }else{
    console.log(x)
  }

  x++

}


while (y<100) {
    // check divisibility
    // print Fizz, Buzz, or FizzBuzz
    // increment x
    if(y % 3 === 0){
    console.log("Fizz")
  }else if(y % 5 === 0){
    console.log("Buzz")
  }else if(y % 3 === 0 && y % 5 === 0 ){
    console.log("FizzBuzz")
  }else{
    console.log(y)
  }

  y++


}
