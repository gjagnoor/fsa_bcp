// return the final result of your function execution --> return stataement

function sumNums (num1, num2) {
  console.log("nums received from the user:", num1, num2); // just logs it out. only used to see what information your variables, etc hold 
  return num1 + num2; // gives you back the output of the function
}

// console.log(sumNums(2))

// sumNums(2,1);

// you can store result from a function execution in variables
let result = sumNums(2,1); 
let result2 = sumNums(2,3);

console.log(result, result2); // you can log 