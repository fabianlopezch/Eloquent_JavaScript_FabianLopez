/* This script presents a solution to the exercise "Looping a Triangle" 
*  in Chapter 2 of Eloquent JavaScript by Haverbeke.
*/


for (let i=0; i<7; i++)
{
    let outputStr = "";

    for (let j=0; j<(i+1); j++)
    {
        outputStr += "#"; 
    }
    
    console.log(outputStr);
}

console.log("\n\n")

for (let outputStr="#"; outputStr.length<8; outputStr+="#") console.log(outputStr);