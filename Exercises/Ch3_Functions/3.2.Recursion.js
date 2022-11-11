/* This script presents a solution to the exercise "Recursion" 
*  in Chapter 3 of Eloquent JavaScript by Haverbeke.
*/

const isEven = function(x)
{
    if (x < 0) x = -x;
    if (x == 0) return true;
    else if (x == 1) return false;
    else return isEven(x - 2);
    // When you enter a negative argument (like -1)
    // the maximum call stack size gets exceeded due to the repeated
    // call of the isEven function. To solve this problem we can turn the 
    // negative value into a positive value before starting the computations.
};

console.log(isEven(-1));