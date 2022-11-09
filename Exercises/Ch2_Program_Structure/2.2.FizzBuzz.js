/* This script presents a solution to the exercise "FizzBuzz" 
*  in Chapter 2 of Eloquent JavaScript by Haverbeke.
*/

for (let i=1; i<101; i++)
{
    if (i%3 == 0 && i%5 != 0) console.log("Fizz");
    else if (i%5 == 0 && i%3 != 0) console.log("Buzz");
    else if (i%3 == 0 && i%5 == 0) console.log("FizzBuzz");
    else console.log(i);
}

console.log("\n\n");

for (let i=1; i<=100; i++)
{
    let outputStr = "";
    if (i%3 == 0) outputStr+="Fizz";
    if (i%5 == 0) outputStr+="Buzz";
    console.log(outputStr || i);    // When outputStr is an empty string its Boolean equivalent becomes false.
                                    // In that case, the OR operator returns the value to its right, i.e., i.
}