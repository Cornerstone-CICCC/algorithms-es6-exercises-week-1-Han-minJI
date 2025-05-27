/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

// anonymous fuctione expression
let result = function(num){

  let returns = ""
  for(let x=0; x<num; x++){
    returns+= "ha"
  }
  return returns
}

console.log(result(3) + '!');