/* This script presents a solution to the exercise "The Sum of a Range" 
*  in Chapter 4 of Eloquent JavaScript by Haverbeke.
*/


// myRange function takes two arguments and returns an array 
// containing all the numbers between those arguments (including them). 
function myRange(x, y)
{
    let myArray = [];
    for (let n = x; n <= y; n++) myArray.push(n);
    return myArray;
}

console.log(myRange(4,15));

// mySum function takes an array of numbers and returns the sum of these numbers.
function mySum(x)
{
    let total = 0;
    for (let n = 0; n < x.length; n++) total += x[n];
    return total;
}

console.log(mySum(myRange(1, 10)));

// myRangeStep function modifies myRange to take an optional third argument
// that indicates the "step" value used when building the array.

function myRangeStep(x, y, z = x > y ? -1 : 1)
{
    let myArray = [];

    if (z >= 0) for (let n = x; n <= y; n += z) myArray.push(n);
    else for (let n = x; n >= y; n += z) myArray.push(n);
        
    return myArray;
}

console.log(myRangeStep(1, 10, 2))
console.log(myRangeStep(5, 2))