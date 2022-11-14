/* This script presents a solution to the exercise "Reversing an Array" 
*  in Chapter 4 of Eloquent JavaScript by Haverbeke.
*/

// reverseArray function takes an array as argument and produces a new array
// that has the same elements in the inverse order.
function reverseArray(myArray)
{
    let newArray = [];
    for (let elem of myArray) newArray.unshift(elem);
    return newArray;    
}

let myArray = [1,2,3,4,5,6];
console.log(reverseArray(myArray));

// reverseArrayInPlace function takes an array as argument and modifies it
// by reversing its elements. 
function reverseArrayInPlace(myArray)
{
    const totalLength = Math.floor((myArray.length)/2)
    for (let n=0; n<totalLength; n++)
    {
        let temp = myArray[n];
        myArray[n] = myArray[myArray.length-1-n];
        myArray[myArray.length-1-n] = temp;      
    }    
}
console.log(myArray);
reverseArrayInPlace(myArray);
console.log(myArray);