// ----------
// let vs const 
let sum1And2 = sumNums(1,2); // let lets you create a variable that stores some information. This information can be changed at a later time

console.log('before reassignment' , sum1And2);

sum1And2 = 'Fullstack'; // reassigning the variable 

console.log('after reassigning sum1And2', sum1And2);

// const --> constant

const sumOneAndTwo = sumNums(1,2);// lets you create a variable that stores some information. But this information cannot be changed elsewhere in the code 

console.log(sumOneAndTwo);

sumOneAndTwo = 'FullstackKKKK' // tried to reassign but will throw an error. You cannot reassign constant variables

console.log(sumOneAndTwo)
