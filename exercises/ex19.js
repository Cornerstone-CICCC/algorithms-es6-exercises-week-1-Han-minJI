/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(message, laugh, num){
  console.log(`I am ${message}, ${laugh(num)}`)
}

emotions("happy", function laugh(num){
  let returns = ""
  for(let x=0; x<num; x++){
    returns+= "ha"
  }
  return returns
}, 2)
